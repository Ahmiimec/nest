import { Get, Controller, Redirect, Req } from "@nestjs/common";
@Controller("cats")
export class CatsController {
  @Get()
  getRoute(): number {
    return 1234;
  }
  @Get("new")
  getNewRoute(): number {
    return 123;
  }
  @Get("redirect")
  @Redirect("https://docs.nestjs.com", 302)
  getRedirect():any {
    if(false){
        return { url: "https://docs.nestjs.com/v5/" };
    }
  }
  @Get("getData")
  getReqBody(@Req() request): string {
    return `Request Here : ${request.query.Test}`;
  }
}
