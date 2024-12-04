import { SharingInformationWhereInput } from "./SharingInformationWhereInput";
import { SharingInformationOrderByInput } from "./SharingInformationOrderByInput";

export type SharingInformationFindManyArgs = {
  where?: SharingInformationWhereInput;
  orderBy?: Array<SharingInformationOrderByInput>;
  skip?: number;
  take?: number;
};
