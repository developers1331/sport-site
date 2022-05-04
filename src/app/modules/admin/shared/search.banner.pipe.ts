import { Pipe, PipeTransform } from '@angular/core';
import { IReviewBanner } from 'src/app/modules/admin/shared/interfaces';

@Pipe({
    name: 'searchBanner',
})
export class SearchBannerPipe implements PipeTransform {
    transform(banner: IReviewBanner[], search = ''): IReviewBanner[] {
        if (!search.trim()) {
            return banner;
        }

        return banner.filter((banner) => {
            return banner.fullName.toLowerCase().includes(search.toLowerCase());
        });
    }
}
