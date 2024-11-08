# Ôn CSS:

**FLEX:**
`.container {
display: flex;

flex-flow: row wrap;
flex-direction: row;
flex-wrap: wrap;

/_ can theo chieu ngang _/
justify-content: flex-start;

/_ can theo chieu doc _/
align-items: center;

/_ flex item _/
/\*

flex-basis: auto theo content / or px;
flex-grow: chiem khong gian kha dung ;
flex-shrink: khong gian kha dung la âm;

viet tat: flex: 1 1 1;

order: thay doi thu tu hien thi
\*/

}`

**GRID**
.container{
/_ GRIDS _/
display: grid;

/_ chia chieu dai cot - cot 1 300 - cot 2 200 | theo ti le: 1fr 1fr 1fr - repeat(3, 1fr)_/
grid-template-columns: 300px 1000px;
/_ hang | theo ti le: _/
grid-template-rows: 100px 200px;
/_ Xet chieu cao khi ko dung 'grid-template-rows' ma de tu dong rot xuong hang _/
/_ minmax(60px, auto) -> min, max _/
grid-auto-rows: 200px;

/_ grid-area: hình vuông hoặc HCN _/
grid-template-columns:
"aa aa aa"
"bb bb bb" ;

/_ tao khoang cach giua row hay column _/
column-gap: 10px;
row-gap: 10px;
}

.item-5{
/_ cot: chiem tu line 2 -> 4 _/
grid-column-start: 2;
grid-column-end: 4;
/_
grid-column: 2 / 4;
_/

/_ cot: chiem tu line 2 -> 4 _/
grid-row-start: 2;
grid-row-end: 4;
/_
grid-row: 2 / 5;
_/

/_ grid-area: hình vuông hoặc HCN _/
grid-area: aa;

`
.container{
/_ GRIDS _/
display: grid;

/_ chia chieu dai cot - cot 1 300 - cot 2 200 | theo ti le: 1fr 1fr 1fr - repeat(3, 1fr)_/
grid-template-columns: 300px 1000px;
/_ hang | theo ti le: _/
grid-template-rows: 100px 200px;
/_ Xet chieu cao khi ko dung 'grid-template-rows' ma de tu dong rot xuong hang _/
/_ minmax(60px, auto) -> min, max _/
grid-auto-rows: 200px;

/_ grid-area: hình vuông hoặc HCN _/
grid-template-columns:
"aa aa aa"
"bb bb bb" ;

/_ tao khoang cach giua row hay column _/
column-gap: 10px;
row-gap: 10px;
}

.item-5{
/_ cot: chiem tu line 2 -> 4 _/
grid-column-start: 2;
grid-column-end: 4;
/_
grid-column: 2 / 4;
_/

/_ cot: chiem tu line 2 -> 4 _/
grid-row-start: 2;
grid-row-end: 4;
/_
grid-row: 2 / 5;
_/

/_ grid-area: hình vuông hoặc HCN _/
grid-area: aa;

`

# Config:

npm create vite@latest
cd vite-project
npm install
npm run dev

# rsc

# Bài 6: Tìm hiểu JSX phần 2:

# Bài 9: Components là gì ?

chia nhỏ giao diện, tái sử dụng, dễ bảo trì

# Bài 10: Props là gì ?

- Properties: thuộc tính

# Bài 13: Rendering list
