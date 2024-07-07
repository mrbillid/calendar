import { SharingInformation as TSharingInformation } from "../api/sharingInformation/SharingInformation";

export const SHARINGINFORMATION_TITLE_FIELD = "id";

export const SharingInformationTitle = (
  record: TSharingInformation
): string => {
  return record.id?.toString() || String(record.id);
};
