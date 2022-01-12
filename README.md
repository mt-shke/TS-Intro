<details>
<summary>Intro</summary>

```js
// tsc main.ts
// tsc main.ts -w     => watch mode : display in terminal
```

</details>

<details>
<summary>Interface</summary>

```js
// interface IUser {
// interface UserInterface {
interface UserInterface {
	name: string;
	age?: number;
	getMessage(): string;
}

const user: UserInterface = {
	name: "Jean Paul",
	age: 43,
	getMessage() {
		return "Hello" + name;
	},
};

const user2: UserInterface = {
	name: "Jack",
	getMessage() {
		return "Hello" + name;
	},
};

console.log(user.getMessage());
```

</details>

<details>

<summary>Union & Type alias</summary>

```js
type ID = string;
type AnOrdinaryTag = string;
type MaybePopularTag = AnOrdinaryTag | string;

const popularTags: AnOrdinaryTag[] = ["dragon, coffee"];
// should be an array of strings only

const dragonsTag: MaybePopularTag = "dragon";
// should be a either AnOrdinaryTag or a string

let username: string = "alex";

let pageName: string | number = "1";

let errorMessage: string | null = null;
```

</details>

<details>
<summary>Void, unknown, any, never</summary>

```js
// use when nothing is expected
const doSomething = (): void => {
	console.log("doSomething");
	// return null from function
};
```

unknown

```js

let valueAny: any = 10;
let valueUnknown: unknown = 10;

let s1 : string = valueAny;
let s2: string = valueUnknown; // error => cannot reassign unknown type to other type this way

console.log(valueAny()); // 10
console.log(valueUnknown()); // error

// convert unknown to type
let s2: string = valueUnknown as string; // ok

// convert type to another type using unknown
let pageNumber: string = "1";
let numericPageNumber: number = (pageNumber as unknown) as number;  // ok

```

 <!-- avoid types any = useless  -->

never => 'never ends...'

```js
// not used so much
const doSomething = (): never => {
	throw "never";
};
```

</details>

<details>
<summary>DOM element</summary>

```js
let page: any = "1"
let pageNumber = page as string;
// when getting default any type (ex: from libraries) etc ... =>  re set any data type

//                  //

const someElement = document.querySelector('.foo') as HTMLInputElement;
// => should change default type DOM element
console.log('someElement', someElement.value);


const eventElement = document.querySelector('.foo') as HTMLInputElement;
eventElement.addEventListener('blur', (event) => {
    // console.log(event.target.value); // error
    const target = event.target as HTMLInputElement;
    // need to set target type before accessing it
    console.log(target.value); // ok
})

```

</details>

<details>
<summary>Class</summary>

```js
interface UserInterface {
	getFullName(): string;
}

class User implements UserInterface {
	private firstName: string;
	protected lastName: string;
	readonly unchagableName: string;
	static readonly maxAge = 50;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	changeUnchangableName(): void {
		// this.unchagableName = "foo"; error
	}

	getFullname(): string {
		return this.firstName + "" + this.lastName;
	}
}

const user = new User("mOnster", "lessons");
// console.log(user.firstName); // error : private
// console.log(user.lastName); // error : protected
console.log(user.getFullname()); // ok

// console.log(user.maxAge); // error, user object does not have maxAge
console.log(User.maxAge); // ok : User class has default maxAge property


// inheritance
class Admin extends User {
	private editor: string;
	setEditor(editor: string): void {
		this.editor = editor;
	}
	getEditor(): string {
		return this.editor;
	}
}

const admin = new Admin('foo', 'bar');

// console.log(admin.editor) // error private
console.log(admin.setEditor)
console.log(admin.getFullname) // ok : access to User class
```

</details>

<details>
<summary>Generic data type <T></summary>

```js

const addId = <T extends object>(obj: T) => {
	const id = Math.random().toString(16);
	return {
		...obj,
		id,
	};
};

interface UserInterface<T, V> {
	name: string;
	data: T;
	meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
	name: "Jack",
	data: {
		meta: "foo",
	},
	meta: "bar",
};

const user2: UserInterface<string[], number> = {
	name: "Jack",
	data: ["foo", "john", "bar"],
	meta: 2,
};

// const result = addId<UserInterface>(user);
const result = addId(user);
console.log("result", result);

```

</details>

<details>
<summary>Enums</summary>

```js
// const statuses = {
//     notStarted: 0,
//     inProgress: 1,
//     done: 2
// }

// console.log(statuses.inProgress);

// enum Status {
// 	NotStarted,
// 	InProgress,
// 	Done,
// }

// console.log(Status.InProgress); // output 1 : objKey number

enum StatusEnum {
	NotStarted = "notStarted",
	InProgress = "inProgress",
	Done = "done",
}

interface Task {
	id: string;
	status: StatusEnum;
}

let notStartedStatus: StatusEnum = StatusEnum.NotStarted;
notStartedStatus = StatusEnum.Done;

console.log(StatusEnum.InProgress);


```

</details>
