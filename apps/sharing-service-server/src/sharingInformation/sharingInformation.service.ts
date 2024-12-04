import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SharingInformationServiceBase } from "./base/sharingInformation.service.base";

@Injectable()
export class SharingInformationService extends SharingInformationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
