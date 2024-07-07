import * as graphql from "@nestjs/graphql";
import { SharingInformationResolverBase } from "./base/sharingInformation.resolver.base";
import { SharingInformation } from "./base/SharingInformation";
import { SharingInformationService } from "./sharingInformation.service";

@graphql.Resolver(() => SharingInformation)
export class SharingInformationResolver extends SharingInformationResolverBase {
  constructor(protected readonly service: SharingInformationService) {
    super(service);
  }
}
