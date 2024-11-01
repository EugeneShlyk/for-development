import {faker} from "@faker-js/faker";

// генерация случайного булевого значения для ошибки
if(faker.datatype.boolean()) {
  throw new Error('Test error')
}
