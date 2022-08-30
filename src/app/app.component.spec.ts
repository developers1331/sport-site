import { AppComponent } from 'src/app/app.component';

describe('AppComponent', (): void => {
    let appComponent: AppComponent;

    beforeEach((): void => {
        appComponent = new AppComponent();
    });

    it('succes create component', (): void => {
        expect(appComponent).toBeTruthy();
    });
});
