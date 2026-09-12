import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{t}from"./jsx-runtime-CadfrxEJ.js";import{_ as n,i as r,m as i,v as a}from"./iframe-4--iYJOx.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{o=t(),a(),s={title:`MAX UI/Button`,parameters:{layout:`padded`}},c={render:()=>(0,o.jsx)(i,{gap:8,wrap:`wrap`,children:[`xsmall`,`small`,`medium`,`large`].map(e=>(0,o.jsx)(n,{size:e,variant:`primary`,children:e},e))})},l={render:()=>(0,o.jsx)(i,{gap:8,wrap:`wrap`,children:[`primary`,`secondary`,`ghost`,`primary-contrast`,`secondary-contrast`,`overlay`,`destructive`].map(e=>(0,o.jsx)(n,{size:`small`,variant:e,children:e},e))})},u={render:()=>(0,o.jsx)(n,{loading:!0,size:`medium`,variant:`primary`,iconBefore:(0,o.jsx)(r,{}),children:`Loading`})},d=[`Sizes`,`Variants`,`Loading`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={8} wrap="wrap">
      {(["xsmall", "small", "medium", "large"] as const).map(size => <Button key={size} size={size} variant="primary">
          {size}
        </Button>)}
    </Flex>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Flex gap={8} wrap="wrap">
      {(["primary", "secondary", "ghost", "primary-contrast", "secondary-contrast", "overlay", "destructive"] as const).map(variant => <Button key={variant} size="small" variant={variant}>
          {variant}
        </Button>)}
    </Flex>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button loading size="medium" variant="primary" iconBefore={<Icon16SearchOutline />}>
      Loading
    </Button>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as Loading,c as Sizes,l as Variants,d as __namedExportsOrder,s as default};