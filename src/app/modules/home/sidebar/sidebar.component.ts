import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/general/services/posts.service';
import { IPost } from 'src/app/modules/admin/shared/interfaces';
import { HomeService } from 'src/app/modules/home/services/home.service';
import {
    Isidebar,
    dataSidebar,
} from 'src/app/modules/home/sidebar/sidebar.params';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    @Input() dataSidebar2: Isidebar[] = dataSidebar;

    public posts$: Observable<IPost[]> = this.postService.getAllPosts();
    public postsConfig: IPost[] = [];
    public ready = false;

    constructor(
        private readonly homeService: HomeService,
        private postService: PostsService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.getLastsPosts();
    }

    public toggle(id: number) {
        this.dataSidebar2[id].open = !this.dataSidebar2[id].open;

        this.dataSidebar2.forEach((element) => {
            if (element.id === id) {
                element.open = true;
            } else {
                element.open = false;
            }
        });
        this.homeService.changeId(id);
    }

    public getLastsPosts() {
        this.posts$.subscribe((posts: IPost[]): void => {
            this.postsConfig = posts.slice(-3).reverse();
            this.ready = true;
        });
    }

    public goToInfo(id?: string) {
        this.router.navigate(['/post', id]);
    }

    public stripDescriptionText(text: any): string {
        return text.replace(/<\/?[^>]+>/g, '').replace(/\&nbsp\;/gi, ' ');
    }
}
