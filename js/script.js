let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); //Tamanho: 400 x 400

//desenha o altar
ctx.beginPath();
ctx.moveTo(50,350);
ctx.lineTo(200,350);
ctx.lineWidth = 10;
ctx.stroke();
ctx.closePath();
ctx.beginPath();
ctx.moveTo(125,350);
ctx.lineTo(125,25);
ctx.lineTo(300,25);
ctx.lineTo(300,50);
ctx.lineWidth = 8;
ctx.stroke();
ctx.closePath();

function forca_reset(){
    //desenha o altar
    ctx.clearRect(0,0,400,400);
    ctx.beginPath();
    ctx.moveTo(50,350);
    ctx.lineTo(200,350);
    ctx.lineWidth = 10;
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.moveTo(125,350);
    ctx.lineTo(125,25);
    ctx.lineTo(300,25);
    ctx.lineTo(300,50);
    ctx.lineWidth = 8;
    ctx.stroke();
    ctx.closePath();
}

function forca_cabeca(){
    //cabeça
    ctx.beginPath();
    ctx.arc(300, 82, 30, 0, 2 * Math.PI, false);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function forca_corpo(){
    //corpo
    ctx.beginPath();
    ctx.moveTo(300,110);
    ctx.lineTo(300,225);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function forca_perna_esq(){
    //perna esquerda
    ctx.beginPath();
    ctx.moveTo(300,225);
    ctx.lineTo(260,260);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function forca_perna_dir(){
    //perna direita
    ctx.beginPath();
    ctx.moveTo(300,225);
    ctx.lineTo(340,260);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function forca_braco_esq(){
    //braco esquerdo
    ctx.beginPath();
    ctx.moveTo(300,150);
    ctx.lineTo(250,150);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function forca_braco_dir(){
    //braco direito
    ctx.beginPath();
    ctx.moveTo(300,150);
    ctx.lineTo(350,150);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
}

function forca_morto(){
    //morto
    ctx.beginPath();
    ctx.moveTo(305,68);
    ctx.lineTo(320,90);
    ctx.moveTo(305,90);
    ctx.lineTo(320,68);
    ctx.moveTo(280,68);
    ctx.lineTo(295,90);
    ctx.moveTo(280,90);
    ctx.lineTo(295,68);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath(); 
}
                     


let q = document.getElementById("q");
let w = document.getElementById("w");
let e = document.getElementById("e");
let r = document.getElementById("r");
let t = document.getElementById("t");
let y = document.getElementById("y");
let u = document.getElementById("u");
let i = document.getElementById("i");
let o = document.getElementById("o");
let p = document.getElementById("p");

let a = document.getElementById("a");
let s = document.getElementById("s");
let d = document.getElementById("d");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let j = document.getElementById("j");
let k = document.getElementById("k");
let l = document.getElementById("l");

let z = document.getElementById("z");
let x = document.getElementById("x");
let c = document.getElementById("c");
let v = document.getElementById("v");
let b = document.getElementById("b");
let n = document.getElementById("n");
let m = document.getElementById("m");

let tentativa = document.getElementById("tentativa");

let dica = document.getElementById("dica");

let acerto = 0;
let erro = 0;

let nivia = false;
let vigor = false;
let exito = false;
let honra = false;
let floco = false;

let caqui = false; 
let foice = false; 
let emily = false; 
let tigre = false; 
let gaita = false; 

let opcao; 

sortear_palavra();

function sortear_palavra(){
    opcao = Math.floor(Math.random() * 10) + 1;

    switch (opcao){
        case 1:
            nivia = true;
            break;
    
        case 2:
            vigor = true;
            break;
    
        case 3:
            exito = true;
            break;
        
        case 4:
            honra = true;
            break;
    
        case 5:
            floco = true;
            break;
        
        case 6:
            caqui = true;
            break;

        case 7:
            foice = true;
            break;

        case 8:
            emily = true;
            break;

        case 9:
            tigre = true;
            break;

        case 10:
            gaita = true;
            break;
    }
}



while(nivia){
    dica.textContent = "Melhor Professora";

    function click_n(){
        acerto++;
        vitoria();
        n.style.backgroundColor = "#3aa394";
        letra1.textContent = "N";
        n.disabled = true;
    }
    function click_i(){
        acerto++;
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra2.textContent = "I";
        letra4.textContent = "I";
        i.disabled = true;
    }
    function click_v(){
        acerto++;
        vitoria();
        v.style.backgroundColor = "#3aa394";
        letra3.textContent = "V";
        v.disabled = true;
    }
    function click_a(){
        acerto++;
        vitoria();
        a.style.backgroundColor = "#3aa394";
        letra5.textContent = "A";
        a.disabled = true;
    }



    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_e(){
        erro++;
        e.style.backgroundColor = "#800000";
        e.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_o(){
        erro++;
        o.style.backgroundColor = "#800000";
        o.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(vigor){
    dica.textContent = "Qualidade";

    function click_v(){
        acerto++;
        vitoria();
        v.style.backgroundColor = "#3aa394";
        letra1.textContent = "V";
        v.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra2.textContent = "I";
        i.disabled = true;
    }
    function click_g(){
        acerto++;
        vitoria();
        g.style.backgroundColor = "#3aa394";
        letra3.textContent = "G";
        g.disabled = true;
    }
    function click_o(){
        acerto++;
        vitoria();
        o.style.backgroundColor = "#3aa394";
        letra4.textContent = "O";
        o.disabled = true;
    }
    function click_r(){
        acerto++;
        vitoria();
        r.style.backgroundColor = "#3aa394";
        letra5.textContent = "R";
        r.disabled = true;
    }


    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_e(){
        erro++;
        e.style.backgroundColor = "#800000";
        e.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_a(){
        erro++;
        a.style.backgroundColor = "#800000";
        a.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(honra){
    dica.textContent = "Princípio";

    function click_h(){
        acerto++;
        vitoria();
        h.style.backgroundColor = "#3aa394";
        letra1.textContent = "H";
        h.disabled = true;
    }
    function click_o(){
        acerto++;
        vitoria();
        o.style.backgroundColor = "#3aa394";
        letra2.textContent = "O";
        o.disabled = true;
    }
    function click_n(){
        acerto++;
        vitoria();
        n.style.backgroundColor = "#3aa394";
        letra3.textContent = "N";
        n.disabled = true;
    }
    function click_r(){
        acerto++;
        vitoria();
        r.style.backgroundColor = "#3aa394";
        letra4.textContent = "R";
        r.disabled = true;
    }
    function click_a(){
        acerto++;
        vitoria();
        a.style.backgroundColor = "#3aa394";
        letra5.textContent = "A";
        a.disabled = true;
    }


    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_e(){
        erro++;
        e.style.backgroundColor = "#800000";
        e.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_i(){
        erro++;
        i.style.backgroundColor = "#800000";
        i.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(exito){
    dica.textContent = "Resultado";

    function click_e(){
        acerto++;
        vitoria();
        e.style.backgroundColor = "#3aa394";
        letra1.textContent = "Ê";
        e.disabled = true;
    }
    function click_x(){
        acerto++;
        vitoria();
        x.style.backgroundColor = "#3aa394";
        letra2.textContent = "X";
        x.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra3.textContent = "I";
        i.disabled = true;
    }
    function click_t(){
        acerto++;
        vitoria();
        t.style.backgroundColor = "#3aa394";
        letra4.textContent = "T";
        t.disabled = true;
    }
    function click_o(){
        acerto++;
        vitoria();
        o.style.backgroundColor = "#3aa394";
        letra5.textContent = "O";
        o.disabled = true;
    }


    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_a(){
        erro++;
        a.style.backgroundColor = "#800000";
        a.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(floco){
    dica.textContent = "Neve";

    function click_f(){
        acerto++;
        vitoria();
        f.style.backgroundColor = "#3aa394";
        letra1.textContent = "F";
        f.disabled = true;
    }
    function click_l(){
        acerto++;
        vitoria();
        l.style.backgroundColor = "#3aa394";
        letra2.textContent = "L";
        l.disabled = true;
    }
    function click_o(){
        acerto++;
        acerto++;
        vitoria();
        o.style.backgroundColor = "#3aa394";
        letra3.textContent = "O";
        letra5.textContent = "O";
        o.disabled = true;
    }
    function click_c(){
        acerto++;
        vitoria();
        c.style.backgroundColor = "#3aa394";
        letra4.textContent = "C";
        c.disabled = true;
    }



    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_e(){
        erro++;
        e.style.backgroundColor = "#800000";
        e.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_i(){
        erro++;
        i.style.backgroundColor = "#800000";
        i.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_a(){
        erro++;
        a.style.backgroundColor = "#800000";
        a.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(caqui){
    dica.textContent = "Fruta";

    function click_c(){
        acerto++;
        vitoria();
        c.style.backgroundColor = "#3aa394";
        letra1.textContent = "C";
        c.disabled = true;
    }
    function click_a(){
        acerto++;
        vitoria();
        a.style.backgroundColor = "#3aa394";
        letra2.textContent = "A";
        a.disabled = true;
    }
    function click_q(){
        acerto++;
        vitoria();
        q.style.backgroundColor = "#3aa394";
        letra3.textContent = "Q";
        q.disabled = true;
    }
    function click_u(){
        acerto++;
        vitoria();
        u.style.backgroundColor = "#3aa394";
        letra4.textContent = "U";
        u.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra5.textContent = "I";
        i.disabled = true;
    }



    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_e(){
        erro++;
        e.style.backgroundColor = "#800000";
        e.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_o(){
        erro++;
        o.style.backgroundColor = "#800000";
        o.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(foice){
    dica.textContent = "Ferramenta";

    function click_f(){
        acerto++;
        vitoria();
        f.style.backgroundColor = "#3aa394";
        letra1.textContent = "F";
        f.disabled = true;
    }
    function click_o(){
        acerto++;
        vitoria();
        o.style.backgroundColor = "#3aa394";
        letra2.textContent = "O";
        o.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra3.textContent = "I";
        i.disabled = true;
    }
    function click_c(){
        acerto++;
        vitoria();
        c.style.backgroundColor = "#3aa394";
        letra4.textContent = "C";
        c.disabled = true;
    }
    function click_e(){
        acerto++;
        vitoria();
        e.style.backgroundColor = "#3aa394";
        letra5.textContent = "E";
        e.disabled = true;
    }
    
    

    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_a(){
        erro++;
        a.style.backgroundColor = "#800000";
        a.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(emily){
    dica.textContent = "Nome";

    function click_e(){
        acerto++;
        vitoria();
        e.style.backgroundColor = "#3aa394";
        letra1.textContent = "E";
        e.disabled = true;
    }
    function click_m(){
        acerto++;
        vitoria();
        m.style.backgroundColor = "#3aa394";
        letra2.textContent = "M";
        m.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra3.textContent = "I";
        i.disabled = true;
    }
    function click_l(){
        acerto++;
        vitoria();
        l.style.backgroundColor = "#3aa394";
        letra4.textContent = "L";
        l.disabled = true;
    }
    function click_y(){
        acerto++;
        vitoria();
        y.style.backgroundColor = "#3aa394";
        letra5.textContent = "Y";
        y.disabled = true;
    }
    
    

    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_t(){
        erro++;
        t.style.backgroundColor = "#800000";
        t.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_o(){
        erro++;
        o.style.backgroundColor = "#800000";
        o.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_a(){
        erro++;
        a.style.backgroundColor = "#800000";
        a.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_g(){
        erro++;
        g.style.backgroundColor = "#800000";
        g.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }
    break;
}


while(tigre){
    dica.textContent = "Animal";

    function click_t(){
        acerto++;
        vitoria();
        t.style.backgroundColor = "#3aa394";
        letra1.textContent = "T";
        t.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra2.textContent = "I";
        i.disabled = true;
    }
    function click_g(){
        acerto++;
        vitoria();
        g.style.backgroundColor = "#3aa394";
        letra3.textContent = "G";
        g.disabled = true;
    }
    function click_r(){
        acerto++;
        vitoria();
        r.style.backgroundColor = "#3aa394";
        letra4.textContent = "R";
        r.disabled = true;
    }
    function click_e(){
        acerto++;
        vitoria();
        e.style.backgroundColor = "#3aa394";
        letra5.textContent = "E";
        e.disabled = true;
    }
    
    

    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_o(){
        erro++;
        o.style.backgroundColor = "#800000";
        o.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_a(){
        erro++;
        a.style.backgroundColor = "#800000";
        a.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


while(gaita){
    dica.textContent = "Instrumento";

    function click_g(){
        acerto++;
        vitoria();
        g.style.backgroundColor = "#3aa394";
        letra1.textContent = "G";
        g.disabled = true;
    }
    function click_a(){
        acerto++;
        acerto++;
        vitoria();
        a.style.backgroundColor = "#3aa394";
        letra2.textContent = "A";
        letra5.textContent = "A";
        a.disabled = true;
    }
    function click_i(){
        acerto++;
        vitoria();
        i.style.backgroundColor = "#3aa394";
        letra3.textContent = "I";
        i.disabled = true;
    }
    function click_t(){
        acerto++;
        vitoria();
        t.style.backgroundColor = "#3aa394";
        letra4.textContent = "T";
        t.disabled = true;
    }



    function click_q(){
        erro++;
        q.style.backgroundColor = "#800000";
        q.disabled = true;
        forca();
    }

    function click_w(){
        erro++;
        w.style.backgroundColor = "#800000";
        w.disabled = true;
        forca();
    }

    function click_e(){
        erro++;
        e.style.backgroundColor = "#800000";
        e.disabled = true;
        forca();
    }

    function click_r(){
        erro++;
        r.style.backgroundColor = "#800000";
        r.disabled = true;
        forca();
    }

    function click_y(){
        erro++;
        y.style.backgroundColor = "#800000";
        y.disabled = true;
        forca();
    }

    function click_u(){
        erro++;
        u.style.backgroundColor = "#800000";
        u.disabled = true;
        forca();
    }

    function click_o(){
        erro++;
        o.style.backgroundColor = "#800000";
        o.disabled = true;
        forca();
    }

    function click_p(){
        erro++;
        p.style.backgroundColor = "#800000";
        p.disabled = true;
        forca();
    }

    function click_s(){
        erro++;
        s.style.backgroundColor = "#800000";
        s.disabled = true;
        forca();
    }

    function click_d(){
        erro++;
        d.style.backgroundColor = "#800000";
        d.disabled = true;
        forca();
    }

    function click_f(){
        erro++;
        f.style.backgroundColor = "#800000";
        f.disabled = true;
        forca();
    }

    function click_h(){
        erro++;
        h.style.backgroundColor = "#800000";
        h.disabled = true;
        forca();
    }

    function click_j(){
        erro++;
        j.style.backgroundColor = "#800000";
        j.disabled = true;
        forca();
    }

    function click_k(){
        erro++;
        k.style.backgroundColor = "#800000";
        k.disabled = true;
        forca();
    }

    function click_l(){
        erro++;
        l.style.backgroundColor = "#800000";
        l.disabled = true;
        forca();
    }

    function click_z(){
        erro++;
        z.style.backgroundColor = "#800000";
        z.disabled = true;
        forca();
    }

    function click_x(){
        erro++;
        x.style.backgroundColor = "#800000";
        x.disabled = true;
        forca();
    }

    function click_c(){
        erro++;
        c.style.backgroundColor = "#800000";
        c.disabled = true;
        forca();
    }

    function click_v(){
        erro++;
        v.style.backgroundColor = "#800000";
        v.disabled = true;
        forca();
    }

    function click_b(){
        erro++;
        b.style.backgroundColor = "#800000";
        b.disabled = true;
        forca();
    }

    function click_n(){
        erro++;
        n.style.backgroundColor = "#800000";
        n.disabled = true;
        forca();
    }

    function click_m(){
        erro++;
        m.style.backgroundColor = "#800000";
        m.disabled = true;
        forca();
    }
    break;
}


function forca(){
    switch (erro){
        case 1:
            forca_cabeca();
            break;

        case 2:
            forca_corpo();
            break;

        case 3:
            forca_perna_esq();
            break;
        
        case 4:
            forca_perna_dir();
            break;
    
        case 5:
            forca_braco_esq();
            break;
    
        case 6:
            alert("Você Perdeu");
            forca_braco_dir();
            forca_morto();

            q.disabled = true;
            w.disabled = true;
            e.disabled = true;
            r.disabled = true;
            t.disabled = true;
            y.disabled = true;
            u.disabled = true;
            i.disabled = true;
            o.disabled = true;
            p.disabled = true;

            a.disabled = true;
            s.disabled = true;
            d.disabled = true;
            f.disabled = true;
            g.disabled = true;
            h.disabled = true;
            j.disabled = true;
            k.disabled = true;
            l.disabled = true;

            z.disabled = true;
            x.disabled = true;
            c.disabled = true;
            v.disabled = true;
            b.disabled = true;
            n.disabled = true;
            m.disabled = true;

            break;
    }
}

function vitoria(){
    if(acerto == 5){
        alert("Você Venceu !");
        tentativa.textContent = "Jogar Novamente";
        forca_reset();

        q.disabled = true;
        w.disabled = true;
        e.disabled = true;
        r.disabled = true;
        t.disabled = true;
        y.disabled = true;
        u.disabled = true;
        i.disabled = true;
        o.disabled = true;
        p.disabled = true;

        a.disabled = true;
        s.disabled = true;
        d.disabled = true;
        f.disabled = true;
        g.disabled = true;
        h.disabled = true;
        j.disabled = true;
        k.disabled = true;
        l.disabled = true;

        z.disabled = true;
        x.disabled = true;
        c.disabled = true;
        v.disabled = true;
        b.disabled = true;
        n.disabled = true;
        m.disabled = true;
    }
}

function tente_nov(){
    opcao -= opcao;
    acerto -= acerto;
    erro -= erro;

    forca_reset();

    nivia = false;
    vigor = false;
    exito = false;
    honra = false;
    floco = false;
    caqui = false; 
    foice = false; 
    emily = false; 
    tigre = false; 
    gaita = false; 


    letra1.textContent = "_";
    letra2.textContent = "_";
    letra3.textContent = "_";
    letra4.textContent = "_";
    letra5.textContent = "_";

    tentativa.textContent = "Tentar Novamente";

    q.style.backgroundColor = "#4C4347"; 
    q.disabled = false;

    w.style.backgroundColor = "#4C4347"; 
    w.disabled = false;

    e.style.backgroundColor = "#4C4347"; 
    e.disabled = false;

    r.style.backgroundColor = "#4C4347"; 
    r.disabled = false;

    t.style.backgroundColor = "#4C4347"; 
    t.disabled = false;

    y.style.backgroundColor = "#4C4347"; 
    y.disabled = false;

    u.style.backgroundColor = "#4C4347"; 
    u.disabled = false;

    i.style.backgroundColor = "#4C4347"; 
    i.disabled = false;

    o.style.backgroundColor = "#4C4347"; 
    o.disabled = false;

    p.style.backgroundColor = "#4C4347"; 
    p.disabled = false;

    a.style.backgroundColor = "#4C4347"; 
    a.disabled = false;

    s.style.backgroundColor = "#4C4347"; 
    s.disabled = false;

    d.style.backgroundColor = "#4C4347"; 
    d.disabled = false;

    f.style.backgroundColor = "#4C4347"; 
    f.disabled = false;

    g.style.backgroundColor = "#4C4347"; 
    g.disabled = false;

    h.style.backgroundColor = "#4C4347"; 
    h.disabled = false;

    j.style.backgroundColor = "#4C4347"; 
    j.disabled = false;

    k.style.backgroundColor = "#4C4347"; 
    k.disabled = false;

    l.style.backgroundColor = "#4C4347"; 
    l.disabled = false;

    z.style.backgroundColor = "#4C4347"; 
    z.disabled = false;

    x.style.backgroundColor = "#4C4347"; 
    x.disabled = false;

    c.style.backgroundColor = "#4C4347"; 
    c.disabled = false;

    v.style.backgroundColor = "#4C4347"; 
    v.disabled = false;

    b.style.backgroundColor = "#4C4347"; 
    b.disabled = false;

    n.style.backgroundColor = "#4C4347"; 
    n.disabled = false;

    m.style.backgroundColor = "#4C4347"; 
    m.disabled = false;

    sortear_palavra();
}