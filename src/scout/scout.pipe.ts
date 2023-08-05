import { PipeTransform, Injectable, BadRequestException ,ArgumentMetadata} from '@nestjs/common';

@Injectable()
export class PhoneNoPipe implements PipeTransform<string, string> {
  transform(value: string, metadata: ArgumentMetadata): string {
    console.log("Pipe Run Successful");
    
    const phoneNo = /^(\+?\d{2}[ ])?\d{10}$/
    ;

    if (!phoneNo.test(value)) {
      throw new BadRequestException('Invalid phone number');
    }

    return value;
  }
}
