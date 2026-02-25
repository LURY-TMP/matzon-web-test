'use client';
import React, { useState } from 'react';

const av = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/men/44.jpg',
  'https://randomuser.me/api/portraits/men/55.jpg',
  'https://randomuser.me/api/portraits/men/62.jpg',
  'https://randomuser.me/api/portraits/men/71.jpg',
  'https://randomuser.me/api/portraits/men/83.jpg',
  'https://randomuser.me/api/portraits/men/91.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/men/36.jpg',
  'https://randomuser.me/api/portraits/men/48.jpg',
  'https://randomuser.me/api/portraits/men/57.jpg',
  'https://randomuser.me/api/portraits/men/68.jpg',
  'https://randomuser.me/api/portraits/men/77.jpg',
  'https://randomuser.me/api/portraits/men/88.jpg',
  'https://randomuser.me/api/portraits/men/12.jpg',
  'https://randomuser.me/api/portraits/men/19.jpg',
  'https://randomuser.me/api/portraits/men/25.jpg',
  'https://randomuser.me/api/portraits/men/28.jpg',
  'https://randomuser.me/api/portraits/men/31.jpg',
  'https://randomuser.me/api/portraits/men/35.jpg',
  'https://randomuser.me/api/portraits/men/40.jpg',
  'https://randomuser.me/api/portraits/men/42.jpg',
  'https://randomuser.me/api/portraits/men/50.jpg',
  'https://randomuser.me/api/portraits/men/60.jpg',
  'https://randomuser.me/api/portraits/men/64.jpg',
  'https://randomuser.me/api/portraits/men/70.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
  'https://randomuser.me/api/portraits/men/80.jpg',
  'https://randomuser.me/api/portraits/men/85.jpg',
  'https://randomuser.me/api/portraits/men/90.jpg',
];

const standings = [
  { pos:1,  name:'Faker',     img:av[0],  j:5, g:5, e:0, d:0, gf:14, gc:3,  gd:'+11', pts:15, form:['W','W','W','W','W'], qual:'direct' },
  { pos:2,  name:'Coldzera',  img:av[1],  j:5, g:4, e:1, d:0, gf:12, gc:4,  gd:'+8',  pts:13, form:['W','W','D','W','W'], qual:'direct' },
  { pos:3,  name:'S1mple',    img:av[2],  j:5, g:4, e:0, d:1, gf:11, gc:5,  gd:'+6',  pts:12, form:['D','W','W','W','W'], qual:'direct' },
  { pos:4,  name:'NiKo',      img:av[3],  j:5, g:4, e:0, d:1, gf:10, gc:5,  gd:'+5',  pts:12, form:['W','L','W','W','W'], qual:'direct' },
  { pos:5,  name:'TenZ',      img:av[4],  j:5, g:3, e:1, d:1, gf:9,  gc:5,  gd:'+4',  pts:10, form:['W','W','L','W','D'], qual:'direct' },
  { pos:6,  name:'Shroud',    img:av[5],  j:5, g:3, e:1, d:1, gf:8,  gc:5,  gd:'+3',  pts:10, form:['L','D','W','W','W'], qual:'direct' },
  { pos:7,  name:'Kscerato',  img:av[6],  j:5, g:3, e:0, d:2, gf:9,  gc:7,  gd:'+2',  pts:9,  form:['W','L','W','W','L'], qual:'direct' },
  { pos:8,  name:'Device',    img:av[7],  j:5, g:3, e:0, d:2, gf:8,  gc:7,  gd:'+1',  pts:9,  form:['L','D','W','W','W'], qual:'direct' },
  { pos:9,  name:'Apex',      img:av[8],  j:5, g:2, e:2, d:1, gf:7,  gc:6,  gd:'+1',  pts:8,  form:['W','L','D','W','D'], qual:'playoff' },
  { pos:10, name:'Rain',      img:av[9],  j:5, g:2, e:2, d:1, gf:7,  gc:7,  gd:'0',   pts:8,  form:['D','W','L','W','D'], qual:'playoff' },
  { pos:11, name:'Krimz',     img:av[10], j:5, g:2, e:1, d:2, gf:7,  gc:7,  gd:'0',   pts:7,  form:['W','D','L','W','L'], qual:'playoff' },
  { pos:12, name:'Twistzz',   img:av[11], j:5, g:2, e:1, d:2, gf:6,  gc:7,  gd:'-1',  pts:7,  form:['L','W','D','W','L'], qual:'playoff' },
  { pos:13, name:'ZywOo',     img:av[12], j:5, g:2, e:1, d:2, gf:6,  gc:8,  gd:'-2',  pts:7,  form:['W','L','D','L','W'], qual:'playoff' },
  { pos:14, name:'EliGE',     img:av[13], j:5, g:2, e:0, d:3, gf:6,  gc:8,  gd:'-2',  pts:6,  form:['L','W','L','W','L'], qual:'playoff' },
  { pos:15, name:'Mixer',     img:av[14], j:5, g:2, e:0, d:3, gf:6,  gc:9,  gd:'-3',  pts:6,  form:['L','L','W','W','L'], qual:'playoff' },
  { pos:16, name:'Xantares',  img:av[15], j:5, g:2, e:0, d:3, gf:5,  gc:8,  gd:'-3',  pts:6,  form:['D','L','W','L','W'], qual:'playoff' },
  { pos:17, name:'GuardiaN',  img:av[16], j:5, g:1, e:2, d:2, gf:5,  gc:7,  gd:'-2',  pts:5,  form:['L','D','W','L','D'], qual:'playoff' },
  { pos:18, name:'kennyS',    img:av[17], j:5, g:1, e:2, d:2, gf:4,  gc:7,  gd:'-3',  pts:5,  form:['L','D','L','W','D'], qual:'playoff' },
  { pos:19, name:'Stewie2K',  img:av[18], j:5, g:1, e:1, d:3, gf:4,  gc:8,  gd:'-4',  pts:4,  form:['D','L','L','W','L'], qual:'playoff' },
  { pos:20, name:'Tarik',     img:av[19], j:5, g:1, e:1, d:3, gf:3,  gc:8,  gd:'-5',  pts:4,  form:['L','L','D','L','W'], qual:'playoff' },
  { pos:21, name:'BnTeT',     img:av[20], j:5, g:1, e:1, d:3, gf:3,  gc:9,  gd:'-6',  pts:4,  form:['L','D','L','L','W'], qual:'playoff' },
  { pos:22, name:'Smooya',    img:av[21], j:5, g:1, e:0, d:4, gf:3,  gc:9,  gd:'-6',  pts:3,  form:['L','L','W','L','L'], qual:'playoff' },
  { pos:23, name:'Jame',      img:av[22], j:5, g:1, e:0, d:4, gf:3,  gc:10, gd:'-7',  pts:3,  form:['L','W','L','L','L'], qual:'playoff' },
  { pos:24, name:'Yekindar',  img:av[23], j:5, g:1, e:0, d:4, gf:2,  gc:10, gd:'-8',  pts:3,  form:['W','L','L','L','L'], qual:'playoff' },
  { pos:25, name:'Brehze',    img:av[24], j:5, g:0, e:2, d:3, gf:3,  gc:10, gd:'-7',  pts:2,  form:['D','L','D','L','L'], qual:'eliminated' },
  { pos:26, name:'Magisk',    img:av[25], j:5, g:0, e:2, d:3, gf:2,  gc:9,  gd:'-7',  pts:2,  form:['L','D','D','L','L'], qual:'eliminated' },
  { pos:27, name:'Xyp9x',     img:av[26], j:5, g:0, e:1, d:4, gf:2,  gc:10, gd:'-8',  pts:1,  form:['L','L','D','L','L'], qual:'eliminated' },
  { pos:28, name:'dupreeh',   img:av[27], j:5, g:0, e:1, d:4, gf:2,  gc:11, gd:'-9',  pts:1,  form:['L','D','L','L','L'], qual:'eliminated' },
  { pos:29, name:'gla1ve',    img:av[28], j:5, g:0, e:1, d:4, gf:1,  gc:11, gd:'-10', pts:1,  form:['D','L','L','L','L'], qual:'eliminated' },
  { pos:30, name:'cadiaN',    img:av[29], j:5, g:0, e:0, d:5, gf:1,  gc:13, gd:'-12', pts:0,  form:['L','L','L','L','L'], qual:'eliminated' },
];

const liveMatches = [
  { date:'HOJE 21:00', team1:'Faker', team2:'Coldzera', score:'2 - 1', live:true, time:null },
  { date:'AMANHA 18:00', team1:'S1mple', team2:'NiKo', score:null, live:false, time:'18:00' },
  { date:'QUI 20:00', team1:'TenZ', team2:'Shroud', score:null, live:false, time:'20:00' },
];

const fC=(r:string)=>r==='W'?'#34A853':r==='D'?'#F5A623':'#EA4335';
const fL=(r:string)=>r==='W'?'V':r==='D'?'E':'D';
const qC=(q:string)=>q==='direct'?'#005EFA':q==='playoff'?'#FA7B17':'#EA4335';

const LINE='rgba(255,255,255,0.15)';
const MW=145,MH=86,BGAP=48,IH=MH+BGAP,CW=32;
const BX0=0,BX1=BX0+MW+CW,BX2=BX1+MW+CW,BX3=BX2+MW+CW;
const BX4=BX3+MW+CW,BX5=BX4+MW+CW,BX6=BX5+MW+CW,BTW=BX6+MW;
const BR1Y=[0,IH,IH*2,IH*3],BR2Y=[IH/2,IH*2+IH/2];
const BSFY=IH+IH/2,BFY=BSFY,CHAMP_Y=BFY-175;
const bmc=(y:number)=>y+MH/2;
type Player={name:string;avatar:string};

function MatchCard({winner,loser,sw,sl,label,date,x,y,isFinal=false}:{winner:Player;loser:Player;sw:number|null;sl:number|null;label:string;date:string;x:number;y:number;isFinal?:boolean;}){
  return(
    <div style={{position:'absolute',width:MW,top:y,left:x,backgroundColor:'rgba(255,255,255,0.04)',borderRadius:12,overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',borderBottom:'1px solid rgba(255,255,255,0.04)',backgroundColor:'rgba(0,94,250,0.09)'}}>
        <img src={winner.avatar} style={{width:24,height:24,borderRadius:'50%',objectFit:'cover',flexShrink:0}}/>
        <span style={{fontSize:11,fontWeight:700,flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#fff'}}>{winner.name}</span>
        <span style={{fontSize:11,fontWeight:900,color:'#005EFA',flexShrink:0}}>{sw??'?'}</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px'}}>
        <img src={loser.avatar} style={{width:24,height:24,borderRadius:'50%',objectFit:'cover',flexShrink:0,opacity:0.5}}/>
        <span style={{fontSize:11,flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#9AA4B6'}}>{loser.name}</span>
        <span style={{fontSize:11,color:'#9AA4B6',flexShrink:0}}>{sl??'?'}</span>
      </div>
      <div style={{padding:'4px 12px',backgroundColor:'rgba(255,255,255,0.02)'}}>
        <span style={{fontSize:8,fontWeight:700,color:'#9AA4B6',textTransform:'uppercase',letterSpacing:1}}>
          {label}{date?' · '+date:''}{isFinal&&<span style={{marginLeft:6,padding:'1px 6px',borderRadius:20,backgroundColor:'rgba(0,94,250,0.2)',color:'#005EFA'}}> FINAL</span>}
        </span>
      </div>
    </div>
  );
}

function BracketUCL(){
  const TOTAL_H=IH*4;
  return(
    <div style={{overflowX:'auto',paddingBottom:20}}>
      <div style={{display:'flex',marginBottom:8,width:BTW,flexShrink:0}}>
        {([{l:'Oitavos',w:MW+CW},{l:'Quartos',w:MW+CW},{l:'Meias',w:MW+CW},{l:'Final',w:MW+CW},{l:'Meias',w:MW+CW},{l:'Quartos',w:MW+CW},{l:'Oitavos',w:MW}] as {l:string,w:number}[]).map((r,i)=>(
          <div key={i} style={{width:r.w,textAlign:'center',fontSize:9,fontWeight:900,textTransform:'uppercase',letterSpacing:2,color:i===3?'#005EFA':'#9AA4B6',flexShrink:0}}>{r.l}</div>
        ))}
      </div>
      <div style={{position:'relative',width:BTW,height:TOTAL_H+80}}>
        <svg style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'visible'}} width={BTW} height={TOTAL_H+80}>
          <line x1={BX0+MW} y1={bmc(BR1Y[0])} x2={BX0+MW+CW/2} y2={bmc(BR1Y[0])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW+CW/2} y1={bmc(BR1Y[0])} x2={BX0+MW+CW/2} y2={bmc(BR1Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW} y1={bmc(BR1Y[1])} x2={BX0+MW+CW/2} y2={bmc(BR1Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW+CW/2} y1={(bmc(BR1Y[0])+bmc(BR1Y[1]))/2} x2={BX1} y2={(bmc(BR1Y[0])+bmc(BR1Y[1]))/2} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW} y1={bmc(BR1Y[2])} x2={BX0+MW+CW/2} y2={bmc(BR1Y[2])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW+CW/2} y1={bmc(BR1Y[2])} x2={BX0+MW+CW/2} y2={bmc(BR1Y[3])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW} y1={bmc(BR1Y[3])} x2={BX0+MW+CW/2} y2={bmc(BR1Y[3])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX0+MW+CW/2} y1={(bmc(BR1Y[2])+bmc(BR1Y[3]))/2} x2={BX1} y2={(bmc(BR1Y[2])+bmc(BR1Y[3]))/2} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX1+MW} y1={bmc(BR2Y[0])} x2={BX1+MW+CW/2} y2={bmc(BR2Y[0])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX1+MW+CW/2} y1={bmc(BR2Y[0])} x2={BX1+MW+CW/2} y2={bmc(BR2Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX1+MW} y1={bmc(BR2Y[1])} x2={BX1+MW+CW/2} y2={bmc(BR2Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX1+MW+CW/2} y1={bmc(BSFY)} x2={BX2} y2={bmc(BSFY)} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX3+MW/2} y1={BFY-49} x2={BX3+MW/2} y2={BFY} stroke="#FFD60A" strokeWidth={1.5} strokeDasharray="4 3"/>
          <line x1={BX2+MW} y1={bmc(BSFY)} x2={BX3} y2={bmc(BFY)} stroke="#005EFA" strokeWidth={1.5}/>
          <line x1={BX3+MW} y1={bmc(BFY)} x2={BX4} y2={bmc(BSFY)} stroke="#005EFA" strokeWidth={1.5}/>
          <line x1={BX4+MW} y1={bmc(BSFY)} x2={BX4+MW+CW/2} y2={bmc(BSFY)} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX4+MW+CW/2} y1={bmc(BR2Y[0])} x2={BX4+MW+CW/2} y2={bmc(BR2Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX4+MW+CW/2} y1={bmc(BR2Y[0])} x2={BX5} y2={bmc(BR2Y[0])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX4+MW+CW/2} y1={bmc(BR2Y[1])} x2={BX5} y2={bmc(BR2Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW} y1={bmc(BR2Y[0])} x2={BX5+MW+CW/2} y2={bmc(BR2Y[0])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW+CW/2} y1={bmc(BR1Y[0])} x2={BX5+MW+CW/2} y2={bmc(BR1Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW+CW/2} y1={bmc(BR1Y[0])} x2={BX6} y2={bmc(BR1Y[0])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW+CW/2} y1={bmc(BR1Y[1])} x2={BX6} y2={bmc(BR1Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW} y1={bmc(BR2Y[1])} x2={BX5+MW+CW/2} y2={bmc(BR2Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW+CW/2} y1={bmc(BR1Y[2])} x2={BX5+MW+CW/2} y2={bmc(BR1Y[3])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW+CW/2} y1={bmc(BR1Y[2])} x2={BX6} y2={bmc(BR1Y[2])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={BX5+MW+CW/2} y1={bmc(BR1Y[3])} x2={BX6} y2={bmc(BR1Y[3])} stroke={LINE} strokeWidth={1.5}/>
        </svg>
        <div style={{position:'absolute',width:MW,top:CHAMP_Y,left:BX3,backgroundColor:'rgba(255,214,10,0.08)',borderRadius:16,display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'12px 16px'}}>
          <div style={{fontSize:22}}>🏆</div>
          <span style={{fontSize:9,fontWeight:900,textTransform:'uppercase',letterSpacing:2,color:'#FFD60A'}}>CAMPEAO</span>
          <img src={av[0]} style={{width:36,height:36,borderRadius:'50%',objectFit:'cover',border:'2px solid #FFD60A'}}/>
          <span style={{fontSize:12,fontWeight:700,color:'#fff'}}>Faker</span>
        </div>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'Coldzera',avatar:av[1]}} sw={3} sl={2} label="FINAL" date="30 MAI." x={BX3} y={BFY} isFinal/>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'Kscerato',avatar:av[6]}} sw={3} sl={2} label="SF1" date="28 ABR." x={BX2} y={BSFY}/>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'S1mple',avatar:av[2]}} sw={3} sl={2} label="QF1" date="7 ABR." x={BX1} y={BR2Y[0]}/>
        <MatchCard winner={{name:'Kscerato',avatar:av[6]}} loser={{name:'TenZ',avatar:av[4]}} sw={3} sl={1} label="QF2" date="7 ABR." x={BX1} y={BR2Y[1]}/>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'ZywOo',avatar:av[12]}} sw={3} sl={1} label="R16" date="10 MAR." x={BX0} y={BR1Y[0]}/>
        <MatchCard winner={{name:'S1mple',avatar:av[2]}} loser={{name:'NiKo',avatar:av[3]}} sw={3} sl={2} label="R16" date="10 MAR." x={BX0} y={BR1Y[1]}/>
        <MatchCard winner={{name:'TenZ',avatar:av[4]}} loser={{name:'Shroud',avatar:av[5]}} sw={3} sl={0} label="R16" date="10 MAR." x={BX0} y={BR1Y[2]}/>
        <MatchCard winner={{name:'Kscerato',avatar:av[6]}} loser={{name:'Device',avatar:av[7]}} sw={3} sl={1} label="R16" date="10 MAR." x={BX0} y={BR1Y[3]}/>
        <MatchCard winner={{name:'Coldzera',avatar:av[1]}} loser={{name:'Apex',avatar:av[8]}} sw={3} sl={1} label="SF2" date="28 ABR." x={BX4} y={BSFY}/>
        <MatchCard winner={{name:'Apex',avatar:av[8]}} loser={{name:'Rain',avatar:av[9]}} sw={3} sl={1} label="QF3" date="7 ABR." x={BX5} y={BR2Y[0]}/>
        <MatchCard winner={{name:'Coldzera',avatar:av[1]}} loser={{name:'Twistzz',avatar:av[11]}} sw={3} sl={2} label="QF4" date="7 ABR." x={BX5} y={BR2Y[1]}/>
        <MatchCard winner={{name:'Apex',avatar:av[8]}} loser={{name:'Mixer',avatar:av[14]}} sw={3} sl={1} label="R16" date="10 MAR." x={BX6} y={BR1Y[0]}/>
        <MatchCard winner={{name:'Rain',avatar:av[9]}} loser={{name:'Krimz',avatar:av[10]}} sw={3} sl={2} label="R16" date="10 MAR." x={BX6} y={BR1Y[1]}/>
        <MatchCard winner={{name:'Coldzera',avatar:av[1]}} loser={{name:'EliGE',avatar:av[13]}} sw={3} sl={0} label="R16" date="10 MAR." x={BX6} y={BR1Y[2]}/>
        <MatchCard winner={{name:'Twistzz',avatar:av[11]}} loser={{name:'Xantares',avatar:av[15]}} sw={3} sl={2} label="R16" date="10 MAR." x={BX6} y={BR1Y[3]}/>
      </div>
    </div>
  );
}

function FormatoDiagram(){
  const pp=[
    {a:'9° Apex',b:'24° Yekindar',ai:av[8],bi:av[23]},
    {a:'10° Rain',b:'23° Jame',ai:av[9],bi:av[22]},
    {a:'11° Krimz',b:'22° Smooya',ai:av[10],bi:av[21]},
    {a:'12° Twistzz',b:'21° BnTeT',ai:av[11],bi:av[20]},
    {a:'13° ZywOo',b:'20° Tarik',ai:av[12],bi:av[19]},
    {a:'14° EliGE',b:'19° Stewie2K',ai:av[13],bi:av[18]},
    {a:'15° Mixer',b:'18° kennyS',ai:av[14],bi:av[17]},
    {a:'16° Xantares',b:'17° GuardiaN',ai:av[15],bi:av[16]},
  ];
  return(
    <div style={{display:'flex',flexDirection:'column',gap:0}}>
      <div style={{backgroundColor:'rgba(0,94,250,0.07)',border:'1px solid rgba(0,94,250,0.25)',borderRadius:14,padding:16}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:38,height:38,borderRadius:10,backgroundColor:'rgba(0,94,250,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>📊</div>
            <div>
              <div style={{fontSize:14,fontWeight:800,color:'#fff'}}>Fase de Classificacao</div>
              <div style={{fontSize:11,color:'#9AA4B6'}}>30 jogadores · 5 partidas · V=3pts E=1pt D=0pts</div>
            </div>
          </div>
          <div style={{backgroundColor:'#005EFA',color:'#fff',fontSize:9,fontWeight:900,padding:'3px 10px',borderRadius:20}}>FASE 1</div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{backgroundColor:'rgba(0,94,250,0.12)',borderRadius:10,padding:'10px 14px',border:'1px solid rgba(0,94,250,0.3)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div><div style={{fontSize:12,fontWeight:800,color:'#005EFA',marginBottom:2}}>⬆ TOP 8 → Oitavos Direto</div><div style={{fontSize:10,color:'#9AA4B6'}}>Sem repescagem</div></div>
            <div style={{width:32,height:32,borderRadius:8,backgroundColor:'rgba(0,94,250,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:900,color:'#005EFA',flexShrink:0}}>8</div>
          </div>
          <div style={{backgroundColor:'rgba(250,123,23,0.12)',borderRadius:10,padding:'10px 14px',border:'1px solid rgba(250,123,23,0.3)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div><div style={{fontSize:12,fontWeight:800,color:'#FA7B17',marginBottom:2}}>⚡ 9° ao 24° → Play-Off</div><div style={{fontSize:10,color:'#9AA4B6'}}>16 jogadores · ida e volta</div></div>
            <div style={{width:32,height:32,borderRadius:8,backgroundColor:'rgba(250,123,23,0.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:900,color:'#FA7B17',flexShrink:0}}>16</div>
          </div>
          <div style={{backgroundColor:'rgba(234,67,53,0.08)',borderRadius:10,padding:'10px 14px',border:'1px solid rgba(234,67,53,0.2)',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div><div style={{fontSize:12,fontWeight:800,color:'#EA4335',marginBottom:2}}>✗ 25° ao 30° → Eliminados</div><div style={{fontSize:10,color:'#9AA4B6'}}>6 jogadores fora</div></div>
            <div style={{width:32,height:32,borderRadius:8,backgroundColor:'rgba(234,67,53,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:16,fontWeight:900,color:'#EA4335',flexShrink:0}}>6</div>
          </div>
        </div>
        <div style={{marginTop:12,padding:'8px 12px',backgroundColor:'rgba(255,255,255,0.03)',borderRadius:8,fontSize:10,color:'#9AA4B6'}}>
          Desempate: Pts → Saldo → Gols marcados → Confronto direto → Sorteio
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',padding:'6px 0'}}><div style={{fontSize:20,color:'#9AA4B6'}}>↓</div></div>
      <div style={{backgroundColor:'rgba(250,123,23,0.07)',border:'1px solid rgba(250,123,23,0.25)',borderRadius:14,padding:16}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:38,height:38,borderRadius:10,backgroundColor:'rgba(250,123,23,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>⚡</div>
            <div>
              <div style={{fontSize:14,fontWeight:800,color:'#fff'}}>Play-Off (Repescagem)</div>
              <div style={{fontSize:11,color:'#9AA4B6'}}>16 jogadores · 8 duelos · Ida e volta</div>
            </div>
          </div>
          <div style={{backgroundColor:'#FA7B17',color:'#fff',fontSize:9,fontWeight:900,padding:'3px 10px',borderRadius:20}}>FASE 2</div>
        </div>
        <div style={{fontSize:11,color:'#9AA4B6',marginBottom:10}}>Sorteio no mesmo dia · Empate agregado → Prorrogacao → Penaltis</div>
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {pp.map((m,i)=>(
            <div key={i} style={{backgroundColor:'rgba(255,255,255,0.04)',borderRadius:10,padding:'8px 12px',display:'flex',alignItems:'center',gap:8}}>
              <img src={m.ai} style={{width:22,height:22,borderRadius:'50%',objectFit:'cover',flexShrink:0}}/>
              <span style={{fontSize:11,fontWeight:700,color:'#fff',flex:1}}>{m.a}</span>
              <span style={{fontSize:10,fontWeight:900,color:'#FA7B17',backgroundColor:'rgba(250,123,23,0.15)',padding:'2px 8px',borderRadius:6}}>VS</span>
              <span style={{fontSize:11,fontWeight:700,color:'#fff',flex:1,textAlign:'right'}}>{m.b}</span>
              <img src={m.bi} style={{width:22,height:22,borderRadius:'50%',objectFit:'cover',flexShrink:0}}/>
            </div>
          ))}
        </div>
        <div style={{marginTop:12,padding:'8px 12px',backgroundColor:'rgba(250,123,23,0.1)',borderRadius:8,fontSize:11,color:'#FA7B17',fontWeight:600}}>
          ✅ 8 vencedores → completam 16 vagas das Oitavos
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center',padding:'6px 0'}}><div style={{fontSize:20,color:'#9AA4B6'}}>↓</div></div>
      {[
        {fase:'FASE 3',icon:'⚔️',label:'Oitavos de Final',sub:'16 jogadores · 8 jogos unicos',col:'#9AA4B6',bg:'rgba(154,164,182,0.06)',border:'rgba(154,164,182,0.2)',info:'8 diretos + 8 do Play-Off',next:'8 vencem → Quartos'},
        {fase:'FASE 4',icon:'🏅',label:'Quartos de Final',sub:'8 jogadores · 4 jogos unicos',col:'#7C3AED',bg:'rgba(124,58,237,0.07)',border:'rgba(124,58,237,0.25)',info:'',next:'4 vencem → Semifinais'},
        {fase:'FASE 5',icon:'🔥',label:'Semifinais',sub:'4 jogadores · 2 jogos unicos',col:'#E53E3E',bg:'rgba(229,62,62,0.07)',border:'rgba(229,62,62,0.25)',info:'',next:'2 vencem → Grande Final'},
      ].map((f,i)=>(
        <div key={i}>
          <div style={{backgroundColor:f.bg,border:`1px solid ${f.border}`,borderRadius:14,padding:16}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8}}>
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:38,height:38,borderRadius:10,backgroundColor:f.bg,border:`1px solid ${f.border}`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>{f.icon}</div>
                <div><div style={{fontSize:14,fontWeight:800,color:'#fff'}}>{f.label}</div><div style={{fontSize:11,color:'#9AA4B6'}}>{f.sub}</div></div>
              </div>
              <div style={{backgroundColor:f.col,color:'#fff',fontSize:9,fontWeight:900,padding:'3px 10px',borderRadius:20}}>{f.fase}</div>
            </div>
            <div style={{fontSize:10,color:'#9AA4B6',marginBottom:8}}>Empate → Prorrogacao → Penaltis{f.info?' · 📌 '+f.info:''}</div>
            <div style={{padding:'7px 12px',backgroundColor:'rgba(255,255,255,0.04)',borderRadius:8,fontSize:11,color:f.col,fontWeight:600}}>✅ {f.next}</div>
          </div>
          <div style={{display:'flex',justifyContent:'center',padding:'6px 0'}}><div style={{fontSize:20,color:'#9AA4B6'}}>↓</div></div>
        </div>
      ))}
      <div style={{backgroundColor:'rgba(255,214,10,0.07)',border:'1px solid rgba(255,214,10,0.35)',borderRadius:14,padding:16}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:12}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <div style={{width:38,height:38,borderRadius:10,backgroundColor:'rgba(255,214,10,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:20}}>🏆</div>
            <div><div style={{fontSize:14,fontWeight:800,color:'#FFD60A'}}>Grande Final</div><div style={{fontSize:11,color:'#9AA4B6'}}>2 jogadores · Partida unica · Empate → Prorrogacao → Penaltis</div></div>
          </div>
          <div style={{backgroundColor:'#FFD60A',color:'#000',fontSize:9,fontWeight:900,padding:'3px 10px',borderRadius:20}}>FASE 6</div>
        </div>
        {[{pos:'🥇 1° Lugar',val:'$150',col:'#FFD60A',bg:'rgba(255,214,10,0.1)'},{pos:'🥈 2° Lugar',val:'$70',col:'#C0C0C0',bg:'rgba(192,192,192,0.08)'},{pos:'🥉 3°/4° Lugar',val:'$35 cada',col:'#CD7F32',bg:'rgba(205,127,50,0.08)'}].map((p,i)=>(
          <div key={i} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 14px',backgroundColor:p.bg,borderRadius:10,border:`1px solid ${p.col}30`,marginBottom:8}}>
            <span style={{fontSize:13,fontWeight:700,color:'#fff'}}>{p.pos}</span>
            <span style={{fontSize:16,fontWeight:900,color:p.col}}>{p.val}</span>
          </div>
        ))}
        <div style={{padding:'10px 14px',backgroundColor:'rgba(255,214,10,0.1)',borderRadius:10,textAlign:'center'}}>
          <div style={{fontSize:12,fontWeight:800,color:'#FFD60A'}}>Premio total: $255 USD</div>
          <div style={{fontSize:10,color:'#9AA4B6',marginTop:4}}>70% do caixa · $365 acumulados em 10 temporadas</div>
        </div>
      </div>
    </div>
  );
}

export function TorneiosView(){
  const [activeTab,setActiveTab]=useState('Em Destaque');
  const [bView,setBView]=useState<'formato'|'chaveamento'>('formato');
  const tabs=['Em Destaque','Classificacao','Bracket','Sobre'];
  return(
    <div style={{backgroundColor:'#0B121E',color:'#F8F9FA',fontFamily:"'Inter',sans-serif",minHeight:'100vh',paddingBottom:40}}>
      <div style={{position:'relative',height:180,overflow:'hidden',marginTop:80}}>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top,#0B121E 0%,rgba(11,18,30,0.4) 100%)'}}/>
        <div style={{position:'absolute',bottom:15,left:20,zIndex:10}}>
          <div style={{fontSize:11,fontWeight:700,color:'#005EFA',letterSpacing:1,textTransform:'uppercase',marginBottom:4}}>MATZON Champions Cup 2026</div>
          <h1 style={{fontSize:22,fontWeight:800,lineHeight:1.1,margin:0}}>Torneios em Destaque</h1>
        </div>
        <div style={{position:'absolute',bottom:15,right:20,zIndex:10,backgroundColor:'rgba(255,214,10,0.15)',borderRadius:10,padding:'6px 12px',border:'1px solid rgba(255,214,10,0.3)'}}>
          <div style={{fontSize:9,color:'#FFD60A',fontWeight:700,textTransform:'uppercase',letterSpacing:1}}>Premio</div>
          <div style={{fontSize:18,fontWeight:900,color:'#FFD60A'}}>$255</div>
        </div>
      </div>
      <div style={{display:'flex',borderBottom:'1px solid #222A3B',padding:'0 20px',overflowX:'auto'}}>
        {tabs.map(tab=>(
          <button key={tab} onClick={()=>setActiveTab(tab)} style={{background:'none',border:'none',color:activeTab===tab?'#F8F9FA':'#9AA4B6',fontSize:14,fontWeight:600,padding:'14px 0',marginRight:24,cursor:'pointer',whiteSpace:'nowrap',borderBottom:activeTab===tab?'3px solid #005EFA':'3px solid transparent',outline:'none'}}>{tab}</button>
        ))}
      </div>

      {activeTab==='Em Destaque'&&(
        <div>
          <div style={{padding:'20px 20px 0'}}>
            <h2 style={{fontSize:15,fontWeight:700,margin:'0 0 14px'}}>Jogos Ao Vivo & Proximos</h2>
            <div style={{display:'flex',gap:12,overflowX:'auto',paddingBottom:10}}>
              {liveMatches.map((m:any,i:number)=>(
                <div key={i} style={{backgroundColor:'#171E2D',borderRadius:12,padding:12,minWidth:250,flexShrink:0,border:m.live?'1px solid rgba(255,59,48,0.3)':'1px solid #222A3B',position:'relative'}}>
                  {m.live&&<div style={{position:'absolute',top:12,right:12,width:6,height:6,backgroundColor:'#FF3B30',borderRadius:'50%'}}/>}
                  <div style={{fontSize:10,color:'#9AA4B6',fontWeight:600,marginBottom:8}}>{m.date}</div>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{display:'flex',flexDirection:'column',gap:8,flex:1}}>
                      {[m.team1,m.team2].map((t:string,ti:number)=>(
                        <div key={ti} style={{display:'flex',alignItems:'center',gap:8,fontSize:13,fontWeight:600}}>
                          <img src={standings.find(s=>s.name===t)?.img||av[ti]} style={{width:22,height:22,borderRadius:'50%',objectFit:'cover'}}/>
                          {t}
                        </div>
                      ))}
                    </div>
                    <div style={{fontSize:m.live?18:13,fontWeight:700,color:m.live?'#fff':'#9AA4B6',marginLeft:12}}>{m.score??m.time}</div>
                  </div>
                  {m.live&&<div style={{marginTop:8,fontSize:10,fontWeight:800,color:'#FF3B30',textTransform:'uppercase',letterSpacing:1}}>Ao Vivo</div>}
                </div>
              ))}
            </div>
          </div>
          <div style={{padding:'20px 20px 0'}}>
            <h2 style={{fontSize:15,fontWeight:700,margin:'0 0 12px'}}>Estrutura do Torneio</h2>
            <div style={{display:'flex',gap:8,overflowX:'auto',paddingBottom:10}}>
              {[{f:'Classif.',n:'30',s:'jogadores',c:'#005EFA',i:'📊'},{f:'Play-Off',n:'16',s:'repescagem',c:'#FA7B17',i:'⚡'},{f:'Oitavos',n:'16',s:'mata-mata',c:'#9AA4B6',i:'⚔️'},{f:'Quartos',n:'8',s:'mata-mata',c:'#7C3AED',i:'🏅'},{f:'Meias',n:'4',s:'mata-mata',c:'#E53E3E',i:'🔥'},{f:'Final',n:'2',s:'decisiva',c:'#FFD60A',i:'🏆'}].map((f,i)=>(
                <div key={i} style={{backgroundColor:'#171E2D',borderRadius:12,padding:'12px 14px',minWidth:90,flexShrink:0,textAlign:'center',border:'1px solid #222A3B'}}>
                  <div style={{fontSize:18,marginBottom:4}}>{f.i}</div>
                  <div style={{fontSize:18,fontWeight:900,color:f.c}}>{f.n}</div>
                  <div style={{fontSize:10,fontWeight:700,color:'#fff',marginTop:2}}>{f.f}</div>
                  <div style={{fontSize:9,color:'#9AA4B6',marginTop:2}}>{f.s}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{padding:'20px'}}>
            <h2 style={{fontSize:15,fontWeight:700,margin:'0 0 12px'}}>Premiacao</h2>
            <div style={{backgroundColor:'#171E2D',borderRadius:12,overflow:'hidden',border:'1px solid #222A3B'}}>
              {[{pos:'🥇 Campeao',val:'$150',pct:'59%',col:'#FFD60A'},{pos:'🥈 Vice',val:'$70',pct:'27%',col:'#C0C0C0'},{pos:'🥉 3°/4°',val:'$35',pct:'14%',col:'#CD7F32'}].map((p,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:'14px 16px',borderBottom:i<2?'1px solid #222A3B':'none'}}>
                  <span style={{fontSize:13,fontWeight:700,color:'#fff',flex:1}}>{p.pos}</span>
                  <div style={{flex:2,height:4,backgroundColor:'rgba(255,255,255,0.05)',borderRadius:2,overflow:'hidden'}}>
                    <div style={{height:'100%',width:p.pct,backgroundColor:p.col,borderRadius:2}}/>
                  </div>
                  <span style={{fontSize:16,fontWeight:900,color:p.col,minWidth:50,textAlign:'right'}}>{p.val}</span>
                </div>
              ))}
              <div style={{padding:'10px 16px',backgroundColor:'rgba(255,255,255,0.02)',display:'flex',justifyContent:'space-between'}}>
                <span style={{fontSize:11,color:'#9AA4B6'}}>Total · 70% caixa MATZON</span>
                <span style={{fontSize:14,fontWeight:800,color:'#fff'}}>$255</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab==='Classificacao'&&(
        <div style={{padding:'20px'}}>
          <div style={{display:'flex',gap:8,marginBottom:14,flexWrap:'wrap'}}>
            {[{q:'direct',c:'#005EFA',l:'Top 8 → Oitavos'},{q:'playoff',c:'#FA7B17',l:'9°-24° Play-Off'},{q:'eliminated',c:'#EA4335',l:'25°-30° Eliminados'}].map((z,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:6,fontSize:11,backgroundColor:`${z.c}18`,padding:'4px 12px',borderRadius:20,border:`1px solid ${z.c}50`}}>
                <span style={{width:8,height:8,backgroundColor:z.c,borderRadius:2,display:'inline-block'}}/>
                <span style={{color:z.c,fontWeight:700}}>{z.l}</span>
              </div>
            ))}
          </div>
          <div style={{backgroundColor:'#171E2D',borderRadius:12,overflow:'hidden'}}>
            <div style={{padding:'14px 20px',borderBottom:'1px solid #222A3B',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div><h2 style={{fontSize:15,fontWeight:700,margin:'0 0 2px'}}>Classificacao</h2><div style={{fontSize:11,color:'#9AA4B6'}}>Champions Cup 2026 · 30 jogadores · 5 jogos</div></div>
              <span style={{fontSize:22}}>📊</span>
            </div>
            <div style={{backgroundColor:'rgba(0,94,250,0.06)',padding:'5px 20px',borderBottom:'1px solid rgba(0,94,250,0.15)'}}>
              <span style={{fontSize:9,fontWeight:800,color:'#005EFA',textTransform:'uppercase',letterSpacing:1}}>⬆ Qualificacao Direta — Oitavos (Top 8)</span>
            </div>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse',whiteSpace:'nowrap'}}>
                <thead><tr>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px 10px 16px',borderBottom:'1px solid #222A3B',textAlign:'left'}}>JOGADOR</th>
                  {['J','V','E','D','GM','GS','DG'].map(h=><th key={h} style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 6px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>{h}</th>)}
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center',borderLeft:'1px solid #222A3B'}}>PTS</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>FORMA</th>
                </tr></thead>
                <tbody>
                  {standings.map((s,i)=>(
                    <React.Fragment key={i}>
                      {s.pos===9&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(250,123,23,0.06)',borderTop:'1px solid rgba(250,123,23,0.2)',borderBottom:'1px solid rgba(250,123,23,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#FA7B17',textTransform:'uppercase',letterSpacing:1}}>⚡ Play-Off — 9° ao 24°</span></td></tr>}
                      {s.pos===25&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(234,67,53,0.06)',borderTop:'1px solid rgba(234,67,53,0.2)',borderBottom:'1px solid rgba(234,67,53,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#EA4335',textTransform:'uppercase',letterSpacing:1}}>✗ Eliminados — 25° ao 30°</span></td></tr>}
                      <tr style={{backgroundColor:i%2===1?'rgba(255,255,255,0.015)':'transparent'}}>
                        <td style={{padding:'9px 8px 9px 0',borderBottom:'1px solid rgba(255,255,255,0.02)',borderLeft:`3px solid ${qC(s.qual)}`}}>
                          <div style={{display:'flex',alignItems:'center',gap:8,paddingLeft:10}}>
                            <span style={{width:18,textAlign:'center',fontSize:11,color:s.pos<=8?'#005EFA':s.pos<=24?'#FA7B17':'#EA4335',fontWeight:700}}>{s.pos}</span>
                            <img src={s.img} style={{width:28,height:28,borderRadius:'50%',objectFit:'cover',flexShrink:0,border:'2px solid #222A3B'}}/>
                            <span style={{fontWeight:600,fontSize:12}}>{s.name}</span>
                          </div>
                        </td>
                        {[s.j,s.g,s.e,s.d,s.gf,s.gc,s.gd].map((v,vi)=>(
                          <td key={vi} style={{padding:'9px 6px',fontSize:12,textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)',color:vi===6?(String(v).startsWith('+')?'#34A853':String(v)==='0'?'#9AA4B6':'#EA4335'):'#fff'}}>{v}</td>
                        ))}
                        <td style={{padding:'9px 8px',textAlign:'center',fontWeight:800,borderLeft:'1px solid #222A3B',borderBottom:'1px solid rgba(255,255,255,0.02)',fontSize:13}}>{s.pts}</td>
                        <td style={{padding:'9px 8px',borderBottom:'1px solid rgba(255,255,255,0.02)'}}>
                          <div style={{display:'flex',gap:3,justifyContent:'center'}}>
                            {s.form.map((r,ri)=>(
                              <span key={ri} style={{width:18,height:18,borderRadius:4,backgroundColor:fC(r),display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:800,color:'#fff'}}>{fL(r)}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab==='Bracket'&&(
        <div style={{padding:'20px'}}>
          <div style={{display:'flex',gap:10,marginBottom:20}}>
            {(['formato','chaveamento'] as const).map(v=>(
              <button key={v} onClick={()=>setBView(v)} style={{flex:1,backgroundColor:bView===v?'#005EFA':'#171E2D',color:bView===v?'#fff':'#9AA4B6',border:'none',padding:10,borderRadius:8,fontSize:13,fontWeight:600,cursor:'pointer',outline:'none'}}>
                {v==='formato'?'Formato':'Chaveamento'}
              </button>
            ))}
          </div>
          {bView==='formato'&&<FormatoDiagram/>}
          {bView==='chaveamento'&&<BracketUCL/>}
        </div>
      )}

      {activeTab==='Sobre'&&(
        <div style={{padding:'25px 20px',color:'#9AA4B6',fontSize:13,lineHeight:1.7}}>
          <h2 style={{color:'#fff',fontSize:16,margin:'0 0 16px'}}>MATZON Champions Cup 2026</h2>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Formato</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>30 jogadores · 5 partidas de classificacao</li>
            <li>Vitoria = 3 pts · Empate = 1 pt · Derrota = 0 pts</li>
            <li>Top 8 → Oitavos direto</li>
            <li>9° ao 24° → Play-Off ida e volta (8 duelos)</li>
            <li>25° ao 30° → Eliminados</li>
            <li>8 vencedores Play-Off + 8 diretos = 16 nas Oitavos</li>
            <li>Oitavos → Quartos → Meias → Final (jogo unico)</li>
            <li>Empate → Prorrogacao → Penaltis</li>
          </ul>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Desempate Classificacao</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>1. Pontos · 2. Saldo gols · 3. Gols marcados · 4. Confronto direto · 5. Sorteio</li>
          </ul>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Premiacao</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>🥇 1° — $150 · 🥈 2° — $70 · 🥉 3°/4° — $35 cada</li>
            <li>Total: $255 USD (70% fundo acumulado)</li>
          </ul>
          <div style={{backgroundColor:'rgba(0,94,250,0.08)',borderRadius:10,padding:'12px 14px',border:'1px solid rgba(0,94,250,0.2)',fontSize:12}}>
            Fundo MATZON: $365 · $255 Champions CUP · $110 reserva institucional
          </div>
        </div>
      )}
    </div>
  );
}
