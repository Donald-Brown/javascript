export let value = 1000;

export function test(){
    value = 2000;
    console.log('tested');
}

let ab = 'Some text';
export default ab;

// could also put
// export {VALUE, test};