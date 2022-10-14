import { Get, Controller, Redirect } from "@nestjs/common";

@Controller("cats")
export class CatsController {
  @Get()
  findAll1(): number {
    return 1234;
  }
  @Get("new")
  findAll(): number {
    return 123;
  }
  @Get("redirect")
  @Redirect("https://docs.nestjs.com", 302)
  getDocs():any {
    if(false){
        return { url: "https://docs.nestjs.com/v5/" };
    }
  }
}
