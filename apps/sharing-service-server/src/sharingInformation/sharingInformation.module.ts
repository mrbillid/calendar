import { Module } from "@nestjs/common";
import { SharingInformationModuleBase } from "./base/sharingInformation.module.base";
import { SharingInformationService } from "./sharingInformation.service";
import { SharingInformationController } from "./sharingInformation.controller";
import { SharingInformationResolver } from "./sharingInformation.resolver";

@Module({
  imports: [SharingInformationModuleBase],
  controllers: [SharingInformationController],
  providers: [SharingInformationService, SharingInformationResolver],
  exports: [SharingInformationService],
})
export class SharingInformationModule {}
