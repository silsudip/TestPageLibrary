import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { ISPService } from "./ISPService";
import { SPService } from "./SPService";
import { ITestService } from "./ITestService";

export class TestService implements ITestService {

    public static readonly servicekey: ServiceKey<ITestService> = ServiceKey.create<ITestService>('Test.TestService', TestService);

    private _SPService: ISPService;

    constructor(serviceScope: ServiceScope) {
        serviceScope.whenFinished(() => {
            this._SPService = serviceScope.consume(SPService.servicekey);
        });
    }
    public async getPages(): Promise<any> {
        try {
            const result = await this._SPService.getListItems('SitePages');
            Promise.resolve(result);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}