import { Observable, Subject } from "rxjs";

const effect$ = new Subject();
const service = new Subject();

const example = effect$
	.delay(1000)
	.do(x => console.log("#1 tick x"))
	.delay(1000)
	.switchMap(x => {
		console.log("#2 tick x");
		return Observable.of(null);
		// return Observable.empty();
	})
	.do(x => console.log("#3 tick x"))
	.subscribe();

effect$.next("#1");
service.next("fail");
// service.next("fail");

// service.next("yey");

// Observable.timer(1500)
// 	.do(() => service.next("!"))
// 	.subscribe()

// source.next("#2");
// source.next("#3");
// source.next("#4");
// service.next("yrey");

Observable.empty()
	.subscribe(
	() => console.log("next #1 finish"),
	() => console.log("next #2 finish"),
	() => console.log("next #3 finish")
	);