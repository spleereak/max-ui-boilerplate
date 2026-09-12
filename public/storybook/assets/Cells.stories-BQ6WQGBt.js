import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{C as n,a as r,f as i,g as a,i as o,l as s,p as c,r as l,v as u,w as d}from"./iframe-4--iYJOx.js";var f,p,m,h,g;function _(){return(_=e((()=>{f=t(),u(),p={title:`MAX UI/Cells`,parameters:{layout:`padded`}},m={name:`CellList`,render:()=>(0,f.jsxs)(l,{mode:`island`,filled:!0,header:(0,f.jsx)(i,{titleStyle:`caps`,children:`Список`}),children:[(0,f.jsx)(d,{title:`CellSimple`,subtitle:`С подзаголовком`,showChevron:!0,before:(0,f.jsx)(c.Container,{size:40,form:`circle`,children:(0,f.jsx)(c.Text,{gradient:`green`,children:`UI`})}),after:(0,f.jsx)(n,{value:3,variant:`attention`,rounded:!0})}),(0,f.jsx)(a,{mode:`themed`,showChevron:!0,before:(0,f.jsx)(r,{}),children:`CellAction themed`}),(0,f.jsx)(a,{mode:`destructive`,children:`CellAction destructive`})]})},h={name:`CellInput`,render:()=>(0,f.jsx)(l,{mode:`island`,filled:!0,children:(0,f.jsx)(s,{height:`normal`,placeholder:`CellInput`,before:(0,f.jsx)(o,{})})})},g=[`CellListExample`,`CellInputExample`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "CellList",
  render: () => <CellList mode="island" filled header={<CellHeader titleStyle="caps">Список</CellHeader>}>
      <CellSimple title="CellSimple" subtitle="С подзаголовком" showChevron before={<Avatar.Container size={40} form="circle">
            <Avatar.Text gradient="green">UI</Avatar.Text>
          </Avatar.Container>} after={<Counter value={3} variant="attention" rounded />} />
      <CellAction mode="themed" showChevron before={<Icon16Chevron />}>
        CellAction themed
      </CellAction>
      <CellAction mode="destructive">CellAction destructive</CellAction>
    </CellList>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "CellInput",
  render: () => <CellList mode="island" filled>
      <CellInput height="normal" placeholder="CellInput" before={<Icon16SearchOutline />} />
    </CellList>
}`,...h.parameters?.docs?.source}}}})))()}_();export{h as CellInputExample,m as CellListExample,g as __namedExportsOrder,p as default};