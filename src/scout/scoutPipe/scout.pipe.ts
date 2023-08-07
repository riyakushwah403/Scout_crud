import {
  PipeTransform,
  Injectable,
  BadRequestException,
  ArgumentMetadata,
} from '@nestjs/common';

@Injectable()
export class PhoneNoPipe implements PipeTransform<any, any> {
  transform(value: any, metadata: ArgumentMetadata): any {
    const phoneNo = /^[1-9]{1}[0-9]{1}[0]?[6789]\d{9}$/;
    console.log('phone number : ', phoneNo.test(value.phoneNo));
    if (!phoneNo.test(value.phoneNo)) {
      throw new BadRequestException('Invalid phone number');
    }

    return value;
  }
}
