import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./react-Z7gd5LxR.js";import{t as n}from"./jsx-runtime-CadfrxEJ.js";import{h as r,i,m as a,n as o,v as s,y as c}from"./iframe-4--iYJOx.js";function l(){let[e,t]=(0,p.useState)(`MAX UI`);return(0,f.jsx)(c,{mode:`contrast`,value:e,onChange:e=>t(e.target.value),placeholder:`Input`,iconBefore:(0,f.jsx)(i,{}),withClearButton:!0,hint:`Подсказка под полем`})}function u(){let[e,t]=(0,p.useState)(`MAX UI`);return(0,f.jsxs)(a,{direction:`column`,gap:12,children:[(0,f.jsx)(c,{mode:`default`,value:e,onChange:e=>t(e.target.value),placeholder:`mode=default (на secondary фоне)`}),(0,f.jsx)(c,{mode:`contrast`,value:e,onChange:e=>t(e.target.value),placeholder:`mode=contrast`,iconBefore:(0,f.jsx)(i,{}),withClearButton:!0})]})}function d(){let[e,t]=(0,p.useState)(!0);return(0,f.jsx)(o,{checked:e,onChange:e=>t(e.target.checked)})}var f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{f=n(),p=t(),s(),m={title:`MAX UI/Forms`,parameters:{layout:`padded`}},h={name:`Input`,render:()=>(0,f.jsx)(l,{})},g={name:`Switch`,render:()=>(0,f.jsx)(d,{})},_={name:`Textarea`,render:()=>(0,f.jsxs)(a,{direction:`column`,gap:12,children:[(0,f.jsx)(r,{mode:`primary`,placeholder:`mode=primary`,defaultValue:`Контрастное поле на secondary фоне`,rows:3}),(0,f.jsx)(r,{mode:`secondary`,placeholder:`mode=secondary`,defaultValue:`Сливается с фоном — не использовать на secondary`,rows:3})]})},v={name:`Input modes`,render:()=>(0,f.jsx)(u,{})},y=[`InputStory`,`SwitchStory`,`TextareaStory`,`InputModes`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Input",
  render: () => <InputDemo />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "Switch",
  render: () => <SwitchDemo />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Textarea",
  render: () => <Flex direction="column" gap={12}>
      <Textarea mode="primary" placeholder="mode=primary" defaultValue="Контрастное поле на secondary фоне" rows={3} />
      <Textarea mode="secondary" placeholder="mode=secondary" defaultValue="Сливается с фоном — не использовать на secondary" rows={3} />
    </Flex>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Input modes",
  render: () => <InputModesDemo />
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as InputModes,h as InputStory,g as SwitchStory,_ as TextareaStory,y as __namedExportsOrder,m as default};