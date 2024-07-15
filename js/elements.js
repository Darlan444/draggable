document.addEventListener('DOMContentLoaded', function() {
    const elements = [
        { number: 1, symbol: "H" }, { number: 2, symbol: "He" },
        { number: 3, symbol: "Li" }, { number: 4, symbol: "Be" },
        { number: 5, symbol: "B" }, { number: 6, symbol: "C" },
        { number: 7, symbol: "N" }, { number: 8, symbol: "O" },
        { number: 9, symbol: "F" }, { number: 10, symbol: "Ne" },
        { number: 11, symbol: "Na" }, { number: 12, symbol: "Mg" },
        { number: 13, symbol: "Al" }, { number: 14, symbol: "Si" },
        { number: 15, symbol: "P" }, { number: 16, symbol: "S" },
        { number: 17, symbol: "Cl" }, { number: 18, symbol: "Ar" },
        { number: 19, symbol: "K" }, { number: 20, symbol: "Ca" },
        { number: 21, symbol: "Sc" }, { number: 22, symbol: "Ti" },
        { number: 23, symbol: "V" }, { number: 24, symbol: "Cr" },
        { number: 25, symbol: "Mn" }, { number: 26, symbol: "Fe" },
        { number: 27, symbol: "Co" }, { number: 28, symbol: "Ni" },
        { number: 29, symbol: "Cu" }, { number: 30, symbol: "Zn" },
        { number: 31, symbol: "Ga" }, { number: 32, symbol: "Ge" },
        { number: 33, symbol: "As" }, { number: 34, symbol: "Se" },
        { number: 35, symbol: "Br" }, { number: 36, symbol: "Kr" },
        { number: 37, symbol: "Rb" }, { number: 38, symbol: "Sr" },
        { number: 39, symbol: "Y" }, { number: 40, symbol: "Zr" },
        { number: 41, symbol: "Nb" }, { number: 42, symbol: "Mo" },
        { number: 43, symbol: "Tc" }, { number: 44, symbol: "Ru" },
        { number: 45, symbol: "Rh" }, { number: 46, symbol: "Pd" },
        { number: 47, symbol: "Ag" }, { number: 48, symbol: "Cd" },
        { number: 49, symbol: "In" }, { number: 50, symbol: "Sn" },
        { number: 51, symbol: "Sb" }, { number: 52, symbol: "Te" },
        { number: 53, symbol: "I" }, { number: 54, symbol: "Xe" },
        { number: 55, symbol: "Cs" }, { number: 56, symbol: "Ba" },
        { number: 57, symbol: "La" }, { number: 58, symbol: "Ce" },
        { number: 59, symbol: "Pr" }, { number: 60, symbol: "Nd" },
        { number: 61, symbol: "Pm" }, { number: 62, symbol: "Sm" },
        { number: 63, symbol: "Eu" }, { number: 64, symbol: "Gd" },
        { number: 65, symbol: "Tb" }, { number: 66, symbol: "Dy" },
        { number: 67, symbol: "Ho" }, { number: 68, symbol: "Er" },
        { number: 69, symbol: "Tm" }, { number: 70, symbol: "Yb" },
        { number: 71, symbol: "Lu" }, { number: 72, symbol: "Hf" },
        { number: 73, symbol: "Ta" }, { number: 74, symbol: "W" },
        { number: 75, symbol: "Re" }, { number: 76, symbol: "Os" },
        { number: 77, symbol: "Ir" }, { number: 78, symbol: "Pt" },
        { number: 79, symbol: "Au" }, { number: 80, symbol: "Hg" },
        { number: 81, symbol: "Tl" }, { number: 82, symbol: "Pb" },
        { number: 83, symbol: "Bi" }, { number: 84, symbol: "Po" },
        { number: 85, symbol: "At" }, { number: 86, symbol: "Rn" },
        { number: 87, symbol: "Fr" }, { number: 88, symbol: "Ra" },
        { number: 89, symbol: "Ac" }, { number: 90, symbol: "Th" },
        { number: 91, symbol: "Pa" }, { number: 92, symbol: "U" },
        { number: 93, symbol: "Np" }, { number: 94, symbol: "Pu" },
        { number: 95, symbol: "Am" }, { number: 96, symbol: "Cm" },
        { number: 97, symbol: "Bk" }, { number: 98, symbol: "Cf" },
        { number: 99, symbol: "Es" }, { number: 100, symbol: "Fm" },
        { number: 101, symbol: "Md" }, { number: 102, symbol: "No" },
        { number: 103, symbol: "Lr" }, { number: 104, symbol: "Rf" },
        { number: 105, symbol: "Db" }, { number: 106, symbol: "Sg" },
        { number: 107, symbol: "Bh" }, { number: 108, symbol: "Hs" },
        { number: 109, symbol: "Mt" }, { number: 110, symbol: "Ds" },
        { number: 111, symbol: "Rg" }, { number: 112, symbol: "Cn" },
        { number: 113, symbol: "Nh" }, { number: 114, symbol: "Fl" },
        { number: 115, symbol: "Mc" }, { number: 116, symbol: "Lv" },
        { number: 117, symbol: "Ts" }, { number: 118, symbol: "Og" }
    ];

    const area = document.querySelector('.area-elements');

    elements.forEach(element =>{
        const { number, symbol } = element;

        const elementDiv = document.createElement('div');

        elementDiv.textContent = symbol;
        elementDiv.classList.add('element');
        elementDiv.setAttribute('draggable', 'true');
        elementDiv.dataset.number = number;
        elementDiv.dataset.symbol = symbol;
        elementDiv.textContent = symbol;
        elementDiv.classList.add('element');
        elementDiv.setAttribute('draggable', 'true');
        elementDiv.dataset.number = number;
        elementDiv.dataset.symbol = symbol;
        area.appendChild(elementDiv);
    });

})

