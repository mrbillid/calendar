import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SharingInformationService } from "./sharingInformation.service";
import { SharingInformationControllerBase } from "./base/sharingInformation.controller.base";

@swagger.ApiTags("sharingInformations")
@common.Controller("sharingInformations")
export class SharingInformationController extends SharingInformationControllerBase {
  constructor(protected readonly service: SharingInformationService) {
    super(service);
  }
}
