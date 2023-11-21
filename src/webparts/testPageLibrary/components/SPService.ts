import { ServiceKey, ServiceScope } from "@microsoft/sp-core-library";
import { SPFI, SPFx, spfi } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/fields";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/batching";
import "@pnp/sp/views";
import "@pnp/sp/lists/web";
import "@pnp/sp/attachments";
import "@pnp/sp/site-users/web";
import "@pnp/sp/profiles";
import "@pnp/sp/sharing";
import "@pnp/sp/items/get-all";
import { PageContext } from '@microsoft/sp-page-context';
import { ISPService } from "./ISPService";

export class SPService implements ISPService {

    public static readonly servicekey: ServiceKey<ISPService> = ServiceKey.create<ISPService>('Vodafone.SPService', SPService);

    private _sp: SPFI;

    constructor(serviceScope: ServiceScope) {
        serviceScope.whenFinished(() => {
            const pageContext: PageContext = serviceScope.consume(PageContext.serviceKey);
            this._sp = spfi().using(SPFx({ pageContext }));
        });
    }
    public async getListItems(listTitle: string): Promise<any[] | undefined> {
        try {
            const response = await this._sp.web.lists.getByTitle(listTitle).items();
            return Promise.resolve(response);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}