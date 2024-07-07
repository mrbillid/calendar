/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CalendarService } from "../calendar.service";
import { CalendarCreateInput } from "./CalendarCreateInput";
import { Calendar } from "./Calendar";
import { CalendarFindManyArgs } from "./CalendarFindManyArgs";
import { CalendarWhereUniqueInput } from "./CalendarWhereUniqueInput";
import { CalendarUpdateInput } from "./CalendarUpdateInput";

export class CalendarControllerBase {
  constructor(protected readonly service: CalendarService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Calendar })
  async createCalendar(
    @common.Body() data: CalendarCreateInput
  ): Promise<Calendar> {
    return await this.service.createCalendar({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Calendar] })
  @ApiNestedQuery(CalendarFindManyArgs)
  async calendars(@common.Req() request: Request): Promise<Calendar[]> {
    const args = plainToClass(CalendarFindManyArgs, request.query);
    return this.service.calendars({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Calendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async calendar(
    @common.Param() params: CalendarWhereUniqueInput
  ): Promise<Calendar | null> {
    const result = await this.service.calendar({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Calendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCalendar(
    @common.Param() params: CalendarWhereUniqueInput,
    @common.Body() data: CalendarUpdateInput
  ): Promise<Calendar | null> {
    try {
      return await this.service.updateCalendar({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Calendar })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCalendar(
    @common.Param() params: CalendarWhereUniqueInput
  ): Promise<Calendar | null> {
    try {
      return await this.service.deleteCalendar({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
