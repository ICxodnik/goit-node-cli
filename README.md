# node cli application

## Options:
```js
  -a, --action <type>  choose action
  -i, --id <type>      user id
  -n, --name <type>    user name
  -e, --email <type>   user email
  -p, --phone <type>   user phone
  -h, --help           display help for command
```

## Actions:
  `list` -    get all,
  `get` -     get by id,
  `remove` -  remove by id,
  `add` -     add item,
  `update` -  update item

### Examples:
  #### Get list of contacts
  `node index.js -a list`
  #### Get contact using id
  `node index.js -a get -i 05olLMgyVQdWRwgKfg5J6`
  #### Add new contact
  `node index.js -a add -n Mango -e mango@gmail.com -p 322-22-22`
  #### Remove contact
  `node index.js -a remove -i qdggE76Jtbfd9eWJHrssH`
  #### Update contact
  `node index.js -a update -i 05olLMgyVQdWRwgKfg5J6 -n Mango -e mango@gmail.com -p 322-22-22`
