class Person {
    // Tên, tuổi, địa chỉ, giới tính
    constructor(name, age, location, sex) {
      this.name = name;
      this.age = age;
      this.location = location;
      this.sex = sex;
    }
  
    GetInformation() {
      console.log("Tên: ", this.name);
      console.log("Tuổi: ", this.age);
      console.log("Tỉnh/thành: ", this.location);
      console.log("Giới tính: ", this.sex);
    }
  }
  
  class HocSinhGioi extends Person {
    constructor(name, age, location, sex, school, GPA) {
      super(name, age, location, sex);
      this.school = school;
      this.GPA = GPA;
    }
  
    GetInformation() {
      super.GetInformation();
      console.log("Trường: ", this.school);
      console.log("GPA: ", this.GPA);
      console.log("Giỏi!");
    }
  }
  
  class HocSinhKha extends Person {
    constructor(name, age, location, sex, school, GPA) {
      super(name, age, location, sex);
      this.school = school;
      this.GPA = GPA;
    }
  
    GetInformation() {
      super.GetInformation();
      console.log("Trường: ", this.school);
      console.log("GPA: ", this.GPA);
      console.log("Khá!");
    }
  }
  
  let Tuan = new Person("Tuấn", 15, "HCM", "male");
  Tuan.GetInformation();
  console.log("--------------------------------------");
  let Khoi = new HocSinhGioi("Khôi", 16, "HCM", "male", "LHP", 10.0);
  Khoi.GetInformation();
  console.log("--------------------------------------");
  let Mai = new HocSinhKha("Mai", 13, "HCM", "female", "AISS", 9.0);
  Mai.GetInformation();


//Bai tap:
//1:
  class Animal {
    constructor(name) {
      this.name = name;
    }
  }
  class Rabbit extends Animal {
    constructor(name) {
      super(name)
      this.created = Date.now();
    }
  }
  let rabbit = new Rabbit("White Rabbit");
  alert(rabbit.name);
  //2:
  class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      let ticks = date.getMilliseconds();
      if (ticks < 10) ticks = "000" + ticks;
    else if (ticks < 100) ticks = "00" + ticks;
    else if (ticks < 1000) ticks = "0" + ticks;


      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs)
        .replace('ms', ticks);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
     // this.timer = setInterval(() => this.render(), 1000);
    }
  }

// class Extendedclock extends Clock {
//   constructor(options){
//     super(options)
//     let {precision = 1000}=options;
//     this.precision=precision;
//   }

// }


  let clock = new Clock({template: 'h:m:s:ms'});
clock.start();

  
  
class PhanSo {
    constructor(tuSo, mauSo) {
      this.tuSo = tuSo;
      this.mauSo = mauSo;
      this.Rutgon()
    }
  Rutgon(){
    
  }
    Sum(PhanSoMoi) {
      // Quy đồng cộng: tử cũ * mẫu mới + tử mới * mẫu cũ
      this.tuSo = this.tuSo * PhanSoMoi.mauSo + PhanSoMoi.tuSo * this.mauSo;
      this.mauSo *= PhanSoMoi.mauSo;
    }

    Difference(PhanSoMoi) {
        this.tuSo = this.tuSo * PhanSoMoi.mauSo - PhanSoMoi.tuSo * this.mauSo;
      this.mauSo *= PhanSoMoi.mauSo;
    }
    Mutiple(PhanSoMoi){
      this.tuSo = this.tuSo * PhanSoMoi.tuSo ;
      this.mauSo*= PhanSoMoi.mauSo;
    }
    Divide(PhanSoMoi){
      this.tuSo = this.tuSo * PhanSoMoi.mauSo ;
      this.mauSo*= PhanSoMoi.tuSo;
    }
  
    Render() {
      console.log(this.tuSo + "/" + this.mauSo);
      
    }
  }
  
  const PSA = new PhanSo(1, 2);
  const PSB = new PhanSo(1, 3);
  
  PSA.Divide(PSB);
  PSA.Render();
  
  


