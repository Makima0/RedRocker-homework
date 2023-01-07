const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student', { year: 2022 }],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}

// lv0
const { name } = stu;
const { hobby: [h1, h2, h3] } = stu;
const { address: { home: HOME } } = stu;
const { title: [_, { year }] } = stu;

// lv1
// 1.
const sumTo_1 = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
// 2.
const sumTo_2 = (n) => {
    if (n !== 1) {
        return sumTo_2(n - 1) + n;
    } else {
        return 1;
    }
}

// lv2.
const fn = function (obj) {
    obj.speak = obj.skills.speak;
    obj.speak();
    delete obj.speak;
}

// lv3.
const strictEqual = (x, y) => {
    if (typeof x !== typeof y) return false;
    else {
        switch (typeof x) {
            case 'undefined':
                return true
            case 'string':
                if (x.length !== y.length) return false;
                else {
                    for (let i = 0; i < x.length; i++) {
                        if (x[i] !== y[i]) return false
                    }
                    return true;
                }
            case 'boolean':
                if (x === y) return true;
                else return false;
            case 'number':
                if (x === NaN || y === NaN) return false;
                if (x === y) return true;
                if (x === +0 && y === -0) return true;
                if (x === -0 && y === +0) return false;
                return false;
            case 'object':
                if (x instanceof Object) return false;
                else return true
        }
    }
}

// const equal = (x, y) => {
//     if (typeof x === typeof y) return strictEqual(x, y)
//     else {
//         switch (typeof x) {
//             case 'object':
//                 if (!(x instanceof Object) && typeof y === 'undefined') return true;
//                 if (x instanceof Object) {
//                     switch (typeof y) {
//                         case 'number': return +x === y;
//                         case 'string': return x + '' === y;
//                     }
//                 }
//             case 'undefined':
//                 if (typeof y === 'object' && !(y instanceof Object)) return true;
//             case 'number':
//                 if (typeof y === 'string') return Number(y) === x;
//                 if (typeof y === 'boolean') return x === Number(y);
//                 if (y instanceof Object) return x == +y;
//             case 'string':
//                 if (typeof y === 'number') return Number(x) === y;
//                 if (y instanceof Object) return x == y + '';
//             case 'boolean':
//                 return Number(x) === y;
//         }
//         return false;
//     }
// }

// lv4.
const simpleCopy = (obj1) => {
    const obj2 = Array.isArray(obj1) ? [] : {};
    for (let i in obj1) {
        obj2[i] = obj1[i];
    }
    return obj2;
}

const deepCopy = (obj1) => {
    const obj2 = Array.isArray(obj1) ? [] : {};
    for (let i in obj1) {
        if (obj1[i] instanceof Object) {
            obj2[i] = deepCopy(obj1[i]);
        } else {
            obj2[i] = obj1[i];
        }
    }
    return obj2;
}