import * as graphql from "@nestjs/graphql";
import { ReminderResolverBase } from "./base/reminder.resolver.base";
import { Reminder } from "./base/Reminder";
import { ReminderService } from "./reminder.service";

@graphql.Resolver(() => Reminder)
export class ReminderResolver extends ReminderResolverBase {
  constructor(protected readonly service: ReminderService) {
    super(service);
  }
}
