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

```js
┌─────┬─────────────────────────┬─────────────────┬─────────────────────────────────────────────────┬──────────────────┐
│ (i) │ id                      │ name            │ email                                           │ phone            │
├─────┼─────────────────────────┼─────────────────┼─────────────────────────────────────────────────┼──────────────────┤
│ 0   │ 'AeHIrLTr6JkxGE6SN-0Rw' │ 'Allen Raymond' │ 'nulla.ante@vestibul.co.uk'                     │ '(992) 914-3792' │
│ 1   │ 'drsAJ4SHPYqZeG-83QTVW' │ 'Kennedy Lane'  │ 'mattis.Cras@nonenimMauris.net'                 │ '(542) 451-7038' │
│ 2   │ 'vza2RIzNGIwutCVCs4mCL' │ 'Wylie Pope'    │ 'est@utquamvel.net'                             │ '(692) 802-2949' │
│ 3   │ '05olLMgyVQdWRwgKfg5J6' │ 'Cyrus Jackson' │ 'nibh@semsempererat.com'                        │ '(501) 472-5218' │
│ 4   │ '1DEXoP8AuCGYc1YgoQ6hw' │ 'Abbot Franks'  │ 'scelerisque@magnis.org'                        │ '(186) 568-3720' │
│ 5   │ 'Z5sbDlS7pCzNsnAHLtDJd' │ 'Reuben Henry'  │ 'pharetra.ut@dictum.co.uk'                      │ '(715) 598-5792' │
│ 6   │ 'C9sjBfCo4UJCWjzBnOtxl' │ 'Simon Morton'  │ 'dui.Fusce.diam@Donec.com'                      │ '(233) 738-2360' │
│ 7   │ 'e6ywwRe4jcqxXfCZOj_1e' │ 'Thomas Lucas'  │ 'nec@Nulla.com'                                 │ '(704) 398-7993' │
│ 8   │ 'rsKkOQUi80UsgVPCcLZZW' │ 'Alec Howard'   │ 'Donec.elementum@scelerisquescelerisquedui.net' │ '(748) 206-2688' │
│ 9   │ 'ctkdx4csx0g50ntypkx0'  │ 'Mango'         │ 'mango@gmail.com'                               │ '322-22-22'      │
└─────┴─────────────────────────┴─────────────────┴─────────────────────────────────────────────────┴──────────────────┘
```
