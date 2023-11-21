export interface ISPService{
    getListItems(listTitle: string): Promise<any[] | undefined>;
}