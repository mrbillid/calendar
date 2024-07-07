import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReminderService } from "./reminder.service";
import { ReminderControllerBase } from "./base/reminder.controller.base";

@swagger.ApiTags("reminders")
@common.Controller("reminders")
export class ReminderController extends ReminderControllerBase {
  constructor(protected readonly service: ReminderService) {
    super(service);
  }
}
