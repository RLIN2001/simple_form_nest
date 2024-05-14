import { Controller, Post, Body } from '@nestjs/common';
import { InfoService } from './info.service';
import { UpdateInfoRequest, UpdateUserInfoRequest } from './interfaces';
import { BaseResponse } from '../interfaces';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Post('/validate')
  getConfig(@Body() bodyRequest: UpdateInfoRequest): Promise<BaseResponse> {
    return this.infoService.validateInfo(bodyRequest);
  }

  @Post('/validate-user')
  validateRegistration(
    @Body() bodyRequest: UpdateUserInfoRequest,
  ): Promise<BaseResponse> {
    return this.infoService.validateUserInfo(bodyRequest);
  }
}
