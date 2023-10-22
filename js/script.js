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

let dica = document.getElementById("dica");

let acerto = 0;
let erro = 0;

let nivia = false;
let vigor = false;
let exito = false;
let honra = false;
let floco = false;

let opcao = Math.floor(Math.random() * 5) + 1;

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
}



while(nivia){
    dica.textContent = "Melhor Professora";

    function click_n(){
        acerto++;
        forca();
        n.style.backgroundColor = "#3aa394";
        letra1.textContent = "N";
        n.disabled = true;
    }
    function click_i(){
        acerto++;
        forca();
        i.style.backgroundColor = "#3aa394";
        letra2.textContent = "I";
        letra4.textContent = "I";
        i.disabled = true;
    }
    function click_v(){
        acerto++;
        forca();
        v.style.backgroundColor = "#3aa394";
        letra3.textContent = "V";
        v.disabled = true;
    }
    function click_a(){
        acerto++;
        forca();
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
        forca();
        v.style.backgroundColor = "#3aa394";
        letra1.textContent = "V";
        v.disabled = true;
    }
    function click_i(){
        acerto++;
        forca();
        i.style.backgroundColor = "#3aa394";
        letra2.textContent = "I";
        i.disabled = true;
    }
    function click_g(){
        acerto++;
        forca();
        g.style.backgroundColor = "#3aa394";
        letra3.textContent = "G";
        g.disabled = true;
    }
    function click_o(){
        acerto++;
        forca();
        o.style.backgroundColor = "#3aa394";
        letra4.textContent = "O";
        o.disabled = true;
    }
    function click_r(){
        acerto++;
        forca();
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
        forca();
        h.style.backgroundColor = "#3aa394";
        letra1.textContent = "H";
        h.disabled = true;
    }
    function click_o(){
        acerto++;
        forca();
        o.style.backgroundColor = "#3aa394";
        letra2.textContent = "O";
        o.disabled = true;
    }
    function click_n(){
        acerto++;
        forca();
        n.style.backgroundColor = "#3aa394";
        letra3.textContent = "N";
        n.disabled = true;
    }
    function click_r(){
        acerto++;
        forca();
        r.style.backgroundColor = "#3aa394";
        letra4.textContent = "R";
        r.disabled = true;
    }
    function click_a(){
        acerto++;
        forca();
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
        forca();
        e.style.backgroundColor = "#3aa394";
        letra1.textContent = "Ê";
        e.disabled = true;
    }
    function click_x(){
        acerto++;
        forca();
        x.style.backgroundColor = "#3aa394";
        letra2.textContent = "X";
        x.disabled = true;
    }
    function click_i(){
        acerto++;
        forca();
        i.style.backgroundColor = "#3aa394";
        letra3.textContent = "I";
        i.disabled = true;
    }
    function click_t(){
        acerto++;
        forca();
        t.style.backgroundColor = "#3aa394";
        letra4.textContent = "T";
        t.disabled = true;
    }
    function click_o(){
        acerto++;
        forca();
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
        forca();
        f.style.backgroundColor = "#3aa394";
        letra1.textContent = "F";
        f.disabled = true;
    }
    function click_l(){
        acerto++;
        forca();
        l.style.backgroundColor = "#3aa394";
        letra2.textContent = "L";
        l.disabled = true;
    }
    function click_o(){
        acerto++;
        forca();
        o.style.backgroundColor = "#3aa394";
        letra3.textContent = "O";
        letra5.textContent = "O";
        o.disabled = true;
    }
    function click_c(){
        acerto++;
        forca();
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

function forca(){
    switch (erro){
        case 1:
            alert("erro 1");
            break;

        case 2:
            alert("erro 2");
            break;

        case 3:
            alert("erro 3");
            break;
        
        case 4:
            alert("erro 4");
            break;
    
        case 5:
            alert("erro 5");
            break;
    
        case 6:
            alert("Fim de Jogo");
            break;
    }

    if(acerto == 5){
        alert("Você Venceu!");
    }
}