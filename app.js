class Student {
    rating ;
    visit = [];
    maxVisit = 25;
    avgNot = 0;

    constructor(name, surname, birthyear) {
        this.name = name;
        this.surname = surname;
        this.birthyear = birthyear;
    }

    Ages() {
        try {
            if (this.birthyear < 1900 ) {
                throw new TypeError('Введіть вірний вік');
            }
        }
        catch (e) {
            console.log(e);
        }
        return (2023 - this.birthyear);

    }

    Avg(arr) {
        let res = 0;
        for (let i = 0; i < arr.length; i++) {
            res += arr[i];
        }
        this.avgNot = (res / arr.length);
        return this.avgNot;
    }

    present() {
        return (this.visit.length < this.maxVisit) ? this.visit.push('true') : console.log('Кінець семестру');
    }

    absent() {
        return (this.visit.length < this.maxVisit) ? this.visit.push('false') : console.log('Кінець семестру');
    }

    summary() {
        let a = 0;
        let avgVisit = 0;
        for (let i = 0; i < this.visit.length; i++) {
            if (this.visit[i] === 'true') {
                a++
            }
        }
        avgVisit = (100 * a) / this.visit.length;

        if (this.avgNot > 90 && avgVisit > 90) {
            console.log("Молодець!")
        } else if ((this.avgNot > 90 && avgVisit < 90) || (this.avgNot < 90 && avgVisit > 90)) {
            console.log("Добре, але можна краще")
        } else {
            console.log("Редиска!")
        }
    }

}

let stud1 = new Student('Василь', 'Стус', '1938');
console.log(`Вік: ${stud1.Ages()} років`);
console.log(`Середній бал: ${stud1.Avg([95, 100, 85, 90])}`);
stud1.present();
stud1.present();
stud1.present();
stud1.present();
stud1.absent();
stud1.absent();
stud1.absent();
stud1.absent();

stud1.summary();

let stud2 = new Student('Лариса', 'Косач', '1871');
console.log(`Вік: ${stud2.Ages()} років`);
console.log(`Середній бал: ${stud2.Avg([90, 55, 80, 90])}`);
stud2.present();
stud2.present();
stud2.absent();
stud2.absent();
stud2.absent();

stud2.summary();

let stud3 = new Student('Влад', 'Цепеш', 1431);
console.log(`Вік: ${stud3.Ages()} років`);