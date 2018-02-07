import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  requiredFields(user) {
    if(!user.name || !user.password || !user.email || !user.securityAns|| !user.securityQuestion || !user.username) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
