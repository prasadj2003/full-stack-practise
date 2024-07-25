const z = require("zod");

const arrSchema = z.array(z.number());
const objSchema = z.object({
    name: z.string(),
    age: z.number()
})

function validateInput(arr) {
    const response = arrSchema.safeParse(arr);
    console.log(response)
}

// validate object

function validateObj(obj) {
    const response = objSchema.safeParse(obj);
    console.log(response)
}

validateObj({
    name: "prasad",
    age: "23"
})

// If you want to stay slightly lean then use  => z.coerce.string() or any other data type.