'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const av=['https://randomuser.me/api/portraits/men/32.jpg','https://randomuser.me/api/portraits/men/44.jpg','https://randomuser.me/api/portraits/men/55.jpg','https://randomuser.me/api/portraits/men/62.jpg','https://randomuser.me/api/portraits/men/71.jpg','https://randomuser.me/api/portraits/men/83.jpg','https://randomuser.me/api/portraits/men/91.jpg','https://randomuser.me/api/portraits/men/22.jpg','https://randomuser.me/api/portraits/men/36.jpg','https://randomuser.me/api/portraits/men/48.jpg','https://randomuser.me/api/portraits/men/57.jpg','https://randomuser.me/api/portraits/men/68.jpg','https://randomuser.me/api/portraits/men/77.jpg','https://randomuser.me/api/portraits/men/88.jpg','https://randomuser.me/api/portraits/men/12.jpg','https://randomuser.me/api/portraits/men/19.jpg','https://randomuser.me/api/portraits/men/25.jpg','https://randomuser.me/api/portraits/men/28.jpg','https://randomuser.me/api/portraits/men/31.jpg','https://randomuser.me/api/portraits/men/35.jpg','https://randomuser.me/api/portraits/men/40.jpg','https://randomuser.me/api/portraits/men/42.jpg','https://randomuser.me/api/portraits/men/50.jpg','https://randomuser.me/api/portraits/men/60.jpg','https://randomuser.me/api/portraits/men/64.jpg','https://randomuser.me/api/portraits/men/70.jpg','https://randomuser.me/api/portraits/men/75.jpg','https://randomuser.me/api/portraits/men/80.jpg','https://randomuser.me/api/portraits/men/85.jpg','https://randomuser.me/api/portraits/men/90.jpg'];

const standings=[
  {pos:1, name:'Faker',     img:av[0],  j:15,g:13,e:1,d:1, gf:38,gc:12,gd:'+26',pts:40,form:['W','W','W','W','W'],zone:'champion'},
  {pos:2, name:'Coldzera',  img:av[1],  j:15,g:11,e:2,d:2, gf:33,gc:14,gd:'+19',pts:35,form:['W','W','D','W','W'],zone:'champion'},
  {pos:3, name:'S1mple',    img:av[2],  j:15,g:10,e:2,d:3, gf:29,gc:15,gd:'+14',pts:32,form:['D','W','W','W','W'],zone:'champions_cup'},
  {pos:4, name:'NiKo',      img:av[3],  j:15,g:10,e:1,d:4, gf:27,gc:16,gd:'+11',pts:31,form:['W','L','W','W','W'],zone:'champions_cup'},
  {pos:5, name:'TenZ',      img:av[4],  j:15,g:9, e:2,d:4, gf:25,gc:17,gd:'+8', pts:29,form:['W','W','L','W','D'],zone:'champions_cup'},
  {pos:6, name:'Shroud',    img:av[5],  j:15,g:9, e:1,d:5, gf:24,gc:18,gd:'+6', pts:28,form:['L','D','W','W','W'],zone:'champions_cup'},
  {pos:7, name:'Kscerato',  img:av[6],  j:15,g:8, e:3,d:4, gf:23,gc:19,gd:'+4', pts:27,form:['W','L','W','W','D'],zone:'champions_cup'},
  {pos:8, name:'Device',    img:av[7],  j:15,g:8, e:2,d:5, gf:22,gc:20,gd:'+2', pts:26,form:['L','D','W','W','W'],zone:'champions_cup'},
  {pos:9, name:'Apex',      img:av[8],  j:15,g:7, e:4,d:4, gf:21,gc:20,gd:'+1', pts:25,form:['W','L','D','W','D'],zone:'mid'},
  {pos:10,name:'Rain',      img:av[9],  j:15,g:7, e:3,d:5, gf:20,gc:21,gd:'-1', pts:24,form:['D','W','L','W','D'],zone:'mid'},
  {pos:11,name:'Krimz',     img:av[10], j:15,g:7, e:2,d:6, gf:19,gc:21,gd:'-2', pts:23,form:['W','D','L','W','L'],zone:'mid'},
  {pos:12,name:'Twistzz',   img:av[11], j:15,g:6, e:4,d:5, gf:18,gc:21,gd:'-3', pts:22,form:['L','W','D','W','L'],zone:'mid'},
  {pos:13,name:'ZywOo',     img:av[12], j:15,g:6, e:3,d:6, gf:17,gc:22,gd:'-5', pts:21,form:['W','L','D','L','W'],zone:'mid'},
  {pos:14,name:'EliGE',     img:av[13], j:15,g:6, e:2,d:7, gf:17,gc:23,gd:'-6', pts:20,form:['L','W','L','W','L'],zone:'mid'},
  {pos:15,name:'Mixer',     img:av[14], j:15,g:5, e:4,d:6, gf:16,gc:23,gd:'-7', pts:19,form:['L','L','W','W','D'],zone:'mid'},
  {pos:16,name:'Xantares',  img:av[15], j:15,g:5, e:3,d:7, gf:15,gc:23,gd:'-8', pts:18,form:['D','L','W','L','W'],zone:'mid'},
  {pos:17,name:'GuardiaN',  img:av[16], j:15,g:5, e:2,d:8, gf:14,gc:24,gd:'-10',pts:17,form:['L','D','W','L','L'],zone:'mid'},
  {pos:18,name:'kennyS',    img:av[17], j:15,g:4, e:4,d:7, gf:13,gc:24,gd:'-11',pts:16,form:['L','D','L','W','D'],zone:'mid'},
  {pos:19,name:'Stewie2K',  img:av[18], j:15,g:4, e:3,d:8, gf:13,gc:25,gd:'-12',pts:15,form:['D','L','L','W','L'],zone:'mid'},
  {pos:20,name:'Tarik',     img:av[19], j:15,g:4, e:2,d:9, gf:12,gc:26,gd:'-14',pts:14,form:['L','L','D','L','W'],zone:'mid'},
  {pos:21,name:'BnTeT',     img:av[20], j:15,g:3, e:4,d:8, gf:11,gc:26,gd:'-15',pts:13,form:['L','D','L','L','W'],zone:'relegation'},
  {pos:22,name:'Smooya',    img:av[21], j:15,g:3, e:3,d:9, gf:10,gc:27,gd:'-17',pts:12,form:['L','L','W','L','D'],zone:'relegation'},
  {pos:23,name:'Jame',      img:av[22], j:15,g:3, e:2,d:10,gf:10,gc:28,gd:'-18',pts:11,form:['L','W','L','L','L'],zone:'relegation'},
  {pos:24,name:'Yekindar',  img:av[23], j:15,g:2, e:4,d:9, gf:9, gc:28,gd:'-19',pts:10,form:['W','L','L','L','D'],zone:'relegation'},
  {pos:25,name:'Brehze',    img:av[24], j:15,g:2, e:3,d:10,gf:8, gc:29,gd:'-21',pts:9, form:['D','L','D','L','L'],zone:'relegation'},
  {pos:26,name:'Magisk',    img:av[25], j:15,g:2, e:2,d:11,gf:7, gc:30,gd:'-23',pts:8, form:['L','D','D','L','L'],zone:'relegation'},
  {pos:27,name:'Xyp9x',     img:av[26], j:15,g:1, e:4,d:10,gf:6, gc:30,gd:'-24',pts:7, form:['L','L','D','L','D'],zone:'relegation'},
  {pos:28,name:'dupreeh',   img:av[27], j:15,g:1, e:3,d:11,gf:5, gc:31,gd:'-26',pts:6, form:['L','D','L','L','L'],zone:'relegation'},
  {pos:29,name:'gla1ve',    img:av[28], j:15,g:1, e:2,d:12,gf:4, gc:32,gd:'-28',pts:5, form:['D','L','L','L','L'],zone:'relegation'},
  {pos:30,name:'cadiaN',    img:av[29], j:15,g:0, e:2,d:13,gf:2, gc:38,gd:'-36',pts:2, form:['L','L','L','L','L'],zone:'relegation'},
];

const fC=(r:string)=>r==='W'?'#34A853':r==='D'?'#F5A623':'#EA4335';
const fL=(r:string)=>r==='W'?'V':r==='D'?'E':'D';
const zC=(z:string)=>z==='champion'?'#FFD700':z==='champions_cup'?'#005EFA':z==='relegation'?'#EA4335':'#262F44';

const historico=[
  {season:1,champion:'Faker',vice:'Coldzera',prize:'$100',matches:15},
  {season:2,champion:'S1mple',vice:'NiKo',prize:'$100',matches:15},
];

export function LigaEliteView(){
  const router=useRouter();
  const [tab,setTab]=useState<'Classificacao'|'Historico'|'Sobre'>('Classificacao');

  const tabStyle=(t:string)=>({background:'none',border:'none',cursor:'pointer',fontSize:13,fontWeight:700,color:tab===t?'#fff':'#9AA4B6',padding:'14px 0',borderBottom:tab===t?'3px solid #7C3AED':'3px solid transparent',outline:'none',whiteSpace:'nowrap' as const});

  return(
    <div style={{backgroundColor:'#0B121E',color:'#fff',fontFamily:"'Inter',sans-serif",minHeight:'100vh',paddingBottom:80}}>

      <div style={{background:'linear-gradient(180deg,#1A1040 0%,#0B121E 100%)',padding:'80px 20px 24px'}}>
        <button onClick={()=>router.push('/eventos')} style={{background:'none',border:'none',color:'#9AA4B6',fontSize:13,fontWeight:600,cursor:'pointer',marginBottom:20,display:'flex',alignItems:'center',gap:6,padding:0}}>← Voltar aos Eventos</button>
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
          <div style={{width:64,height:64,borderRadius:16,background:'linear-gradient(135deg,#7C3AED,#4F46E5)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:32,boxShadow:'0 0 30px rgba(124,58,237,0.5)',flexShrink:0}}>⚽</div>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
              <h1 style={{fontSize:22,fontWeight:900,margin:0}}>Liga Elite</h1>
              <span style={{fontSize:10,fontWeight:800,backgroundColor:'#7C3AED',color:'#fff',padding:'3px 8px',borderRadius:6}}>OFICIAL</span>
            </div>
            <div style={{fontSize:12,color:'#9AA4B6',fontWeight:600}}>Liga oficial MATZON · 30 jogadores · 15 jogos</div>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
          {[{label:'Jogadores',value:'30'},{label:'Jogos/Temp.',value:'15'},{label:'Prémio',value:'$255'},{label:'Periodicidade',value:'10 temp.'}].map((s,i)=>(
            <div key={i} style={{backgroundColor:'rgba(124,58,237,0.15)',borderRadius:10,padding:'10px 8px',textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:900,color:'#A78BFA'}}>{s.value}</div>
              <div style={{fontSize:10,color:'#9AA4B6',fontWeight:600,marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:'flex',gap:24,padding:'0 20px',borderBottom:'1px solid #262F44',overflowX:'auto'}}>
        {(['Classificacao','Historico','Sobre'] as const).map(t=>(
          <button key={t} style={tabStyle(t)} onClick={()=>setTab(t)}>{t}</button>
        ))}
      </div>

      {tab==='Classificacao'&&(
        <div style={{padding:'16px 0'}}>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',padding:'0 20px',marginBottom:14}}>
            {[{c:'#FFD700',l:'1°-2° Campeão/Vice'},{c:'#005EFA',l:'3°-8° Champions Cup'},{c:'#EA4335',l:'21°-30° Zona de Descida'}].map((z,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:6,fontSize:11,backgroundColor:`${z.c}18`,padding:'4px 12px',borderRadius:20,border:`1px solid ${z.c}50`}}>
                <span style={{width:8,height:8,backgroundColor:z.c,borderRadius:2,display:'inline-block'}}/><span style={{color:z.c,fontWeight:700}}>{z.l}</span>
              </div>
            ))}
          </div>
          <div style={{backgroundColor:'#171E2D',margin:'0 20px',borderRadius:12,overflow:'hidden'}}>
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
                      {s.pos===3&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(0,94,250,0.06)',borderTop:'1px solid rgba(0,94,250,0.2)',borderBottom:'1px solid rgba(0,94,250,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#005EFA',textTransform:'uppercase',letterSpacing:1}}>⬆ Qualificação Champions Cup — 3° ao 8°</span></td></tr>}
                      {s.pos===9&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(255,255,255,0.02)',borderTop:'1px solid #262F44',borderBottom:'1px solid #262F44'}}><span style={{fontSize:9,fontWeight:800,color:'#9AA4B6',textTransform:'uppercase',letterSpacing:1}}>Zona Média — 9° ao 20°</span></td></tr>}
                      {s.pos===21&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(234,67,53,0.06)',borderTop:'1px solid rgba(234,67,53,0.2)',borderBottom:'1px solid rgba(234,67,53,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#EA4335',textTransform:'uppercase',letterSpacing:1}}>⬇ Zona de Descida — 21° ao 30°</span></td></tr>}
                      <tr style={{backgroundColor:i%2===1?'rgba(255,255,255,0.015)':'transparent'}}>
                        <td style={{padding:'9px 8px 9px 0',borderBottom:'1px solid rgba(255,255,255,0.02)',borderLeft:`3px solid ${zC(s.zone)}`}}>
                          <div style={{display:'flex',alignItems:'center',gap:8,paddingLeft:10}}>
                            <span style={{width:18,textAlign:'center',fontSize:11,color:s.zone==='champion'?'#FFD700':s.zone==='champions_cup'?'#005EFA':s.zone==='relegation'?'#EA4335':'#9AA4B6',fontWeight:700}}>{s.pos}</span>
                            <img src={s.img} style={{width:28,height:28,borderRadius:'50%',objectFit:'cover',flexShrink:0,border:'2px solid #222A3B'}}/>
                            <span style={{fontWeight:600,fontSize:12}}>{s.name}</span>
                          </div>
                        </td>
                        {[s.j,s.g,s.e,s.d,s.gf,s.gc,s.gd].map((v,vi)=>(
                          <td key={vi} style={{padding:'9px 6px',fontSize:12,textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)',color:vi===6?(String(v).startsWith('+')?'#34A853':String(v)==='0'?'#9AA4B6':'#EA4335'):'#fff'}}>{v}</td>
                        ))}
                        <td style={{padding:'9px 8px',textAlign:'center',fontWeight:800,borderLeft:'1px solid #222A3B',borderBottom:'1px solid rgba(255,255,255,0.02)',fontSize:13,color:s.zone==='champion'?'#FFD700':'#fff'}}>{s.pts}</td>
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

      {tab==='Historico'&&(
        <div style={{padding:'20px',display:'flex',flexDirection:'column',gap:12}}>
          {historico.map((h,i)=>(
            <div key={i} style={{backgroundColor:'#151C2B',borderRadius:12,padding:'16px',border:'1px solid #262F44'}}>
              <div style={{fontSize:11,color:'#9AA4B6',fontWeight:600,marginBottom:8,textTransform:'uppercase',letterSpacing:1}}>Temporada {h.season}</div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div>
                  <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
                    <span style={{fontSize:18}}>🥇</span><span style={{fontSize:15,fontWeight:800}}>{h.champion}</span>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    <span style={{fontSize:16}}>🥈</span><span style={{fontSize:13,fontWeight:600,color:'#9AA4B6'}}>{h.vice}</span>
                  </div>
                </div>
                <div style={{textAlign:'right'}}>
                  <div style={{fontSize:18,fontWeight:900,color:'#A78BFA'}}>{h.prize}</div>
                  <div style={{fontSize:11,color:'#9AA4B6',marginTop:4}}>{h.matches} jogos</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab==='Sobre'&&(
        <div style={{padding:'25px 20px',color:'#9AA4B6',fontSize:13,lineHeight:1.7}}>
          <h2 style={{color:'#fff',fontSize:16,margin:'0 0 16px'}}>Liga Elite MATZON · Evento Oficial</h2>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Formato</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>30 jogadores · 15 partidas (duas voltas)</li>
            <li>Vitória = 3 pts · Empate = 1 pt · Derrota = 0 pts</li>
            <li>1° e 2° → Campeão e Vice da Liga Elite</li>
            <li>3° ao 8° → Qualificados diretos para Champions Cup</li>
            <li>21° ao 30° → Zona de descida</li>
          </ul>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Premiação</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>🥇 1° — $100 · 🥈 2° — $75 · 🥉 3° — $50 · 4° — $30</li>
            <li>Total: $255 USD</li>
          </ul>
          <div style={{backgroundColor:'rgba(124,58,237,0.08)',borderRadius:10,padding:'12px 14px',border:'1px solid rgba(124,58,237,0.2)',fontSize:12}}>
            Realiza-se a cada 10 temporadas regulares MATZON. É o evento mais importante do calendário.
          </div>
        </div>
      )}
    </div>
  );
}
