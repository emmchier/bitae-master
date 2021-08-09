// modals
const initModal = (modalTitle, modalDesc) => {
  const tipModal = `
    <div class="tipsModal modal fade" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable modal-fullscreen-lg-down">
        <div class="modal-content elevation4">
          <div class="modal-header elevation2">
            <h5 class="modal-title" id="exampleModalLabel">${modalTitle}</h5>
          </div>
          <div class="modal-body">
            ${modalDesc}
          </div>
          <div class="modal-footer elevation4">
            <button 
              class="
                customBtn 
                customBtn__outlined 
                customBtn__outlined--small" 
              data-bs-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  const modalContainer = document.querySelector(".modalContainer");
  modalContainer.innerHTML = tipModal;
};

const modalList = [
  {
    id: "toogleModalImg",
    title: "Imagen, nombre y puesto",
    desc: `
      <h3>Tu imagen</h3>
      <p class="modalDesc">
        Si bien no debe influir en el criterio de selección, un cv con tu 
        imagen le suma mayor personalidad visual. Tu imagen debe ir de frente, 
        lo más nítida y de mejor calidad posible, debe expresar la mejor buena 
        onda, sin sombreros, ni lentes de sol ni nada que obstruya tus rasgos. 
        Si bien hay países que hoy en día no incluyen la imagen en el cv, en 
        Argentina y otros de Latinoamérica, es un factor que enriquece y no debe 
        jamás influir en el criterio de selección de cada recruiter.
      </p>
  
      <h3>Tu nombre completo</h3>
      <p class="modalDesc">
        Debe ir completo con tu nombre, apellido y segundos o terceros nombres 
        incluidos siempre que no se vuelva extenso al punto de verse como una 
        frase. No debes incluir pseudónimos ni diminutivos de ningún tipo.
      </p> 
      
      <h3>Tu puesto profesional</h3>
      <p class="modalDesc">
        Debe ir debajo de tu nombre completo y es el mismo puesto por el que 
        estás buscando trabajo. Si incluís más de 2 puestos laborales, ambos 
        deben pertenecer a un mismo área. Quien te esté buscando para entrevistarte 
        debe saber en qué área incluirte y si las áreas de tus puestos son diferentes, 
        se dificulta y puede significar el perder una oportunidad.
      </p>
      `,
  },
  {
    id: "toogleModalData",
    title: "Datos personales y de contacto",
    desc: `
      <p class="modalDesc">
        Te recomendamos separar los Datos Personales de los Datos de Contacto
        para que quien lea tu cv pueda localizar y diferenciar rapidamente los 
        medios por los cuales comunicarse con vos de los medios por los cuales
        saber más de vos.
      </p>

      <h3>Datos Personales</h3>
      <p class="modalDesc">
        No pongas información sensible. Bastará con especificar tu dirección postal 
        (Solo la "altura" de la calle. Para tu seguridad nunca especifiques la dirección
        exacta. Un buen ejemplo: "Calle Roca al 1100"), tu cumpleaños, nacionalidad, tu 
        disponibilidad para entrevistas (Full-time, horario a coordinar, etc), y a modo
        opcional, tu estado civil.
      </p>

      <p class="modalDesc">
        En algunos perfiles, dejamos a tu consideración si 
        sumar la licencia de conducir. No hará falta agregar en ningún caso tu DNI ni 
        especificar si contas con hijos o no. 
      </p>
      
      <h3>Datos de Contacto</h3>
      <p class="modalDesc">
        En primer lugar tu email (en lo posible de Gmail para poder utiliza Meet y otras
        otras herramientas muy usuales de Google) y un teléfono móvil. Por cuestiones de 
        seguridad, no te recomendamos agregar teléfonos fijos. La importancia de especificar 
        unicamente tu celular, reside a la hora de ubicarte con mayor presición por parte de 
        la gente de recruting. 
      </p>

      <p class="modalDesc">
        Links a tus redes relacionadas al puesto que buscas, comenzando
        por tu LinkedIn (en caso de no tenerlo deberías ir pensando en crear una cuenta en
        éstos momentos), y continuando por referidos a tu área como: Github, Behance, Dribbble, 
        entre otras.
      </p>
      `,
  },
  {
    id: "toogleModalExpProf",
    title: "Experiencia Profesional",
    desc: `
      <p class="modalDesc">
        De las secciones más importantes en tu cv. En caso de no contar con
        experiencia previa, te recomendamos enlistar cursos o estudios realizados
        que tengan que ver con el puesto que estás buscando. 
      </p>

      <p class="modalDesc">
        En el caso de contar con dicha experiencia, te recomendamos enlistar cada
        una en campos que deberán contener el nombre del puesto en primer lugar,
        el año de inicio y sece de actividades, la empresa
        institución o comercio donde lo ejerciste y un muy breve listado
        de tareas aportadas en el mismo. 
      </p>
        
      <p class="modalDesc">
        Recomendamos solamente cargar las tareas 
        escenciales, lo más acotadas y concizas posibles y sumar un listado de skills, 
        tecnologías o habilidades utilizadas por cada puesto, para que la gente de 
        recruting conozca con qué herramientas te desempeñaste en cada área.
      </p>

      <p class="modalDesc">
        En ningún caso te recomendamos ocupar espacio valioso del cv con logotipos de las
        empresas donde trabajaste, ni nada similar. En cuanto a las Referencias, si lo 
        consideras necesario para el puesto que estás buscando, agregá el nombre del 
        referido, el puesto que ocupa en dicha empresa y un teléfono del mismo. Cada
        referencia obviamente al final de cada puesto laboral.
      </p>
      `,
  },
  {
    id: "toogleModalSkills",
    title: "Skills",
    desc: `
      <p class="modalDesc">
        Podes enlistarlas en una sección a parte, por ejemplo, en el caso
        de no contar con experiencia profesional previa, pero en el caso
        de si contar con la misma, es preferible que por cada puesto laboral
        sumes al final un listado breve de las herramientas, tecnologías o 
        habilidades con las que te desempeñaste en dicho puesto.
      </p>

      <p class="modalDesc"> 
        Te recomendamos no agregar skills que no tengan nada que ver con el
        puesto puntual que estás buscando. Ej: Si estás en búsqueda activa como
        Administrativo, deberás agregar herramientas digitales, softwares y demás
        utilizadas en el puesto y no deberás mezclar, por ejemplo, aptitudes de
        relleno que no hacen más que ocupar lugar valioso para otros campos.
      </p>

      <p class="modalDesc"> 
        Todo lo referente a aptitudes o una breve descripción sobre tu persona, 
        recomendamos no incluirla en el cv por el simple hecho de nadie lo leerá.  
      </p>
      `,
  },
  {
    id: "toogleModalCursos",
    title: "Cursos realizados",
    desc: `
      <p class="modalDesc">
        Los cursos o capacitaciones realizadas son de lo más importante en 
        tu cv junto con tu experiencia profesional, skills y los datos de 
        contacto. En el caso de contar con cursos referentes al puesto que 
        estás buscando, te recomendamos enlistarlos cada uno con el nombre
        del curso, el año de inicio y sece de actividades y la institución, 
        escuela o plataforma donde lo cursaste. No será necesario detallar las
        tareas realizadas, pero si una breve descripción del objetivo alcanzado
        en el mismo. 
      </p>

      <p class="modalDesc">
        En el caso de no contar con experiencia profesional previa, será
        conveniente el enfatizar la mayor prioridad en ésta lista de cursos, 
        por lo cual, en cada campo podrás detallar un listado de tareas realizadas
        dependiendo la brevedad o amplitud de la cantidad de cursos que dispongas. 
        En este caso también, puede sumar el agregar un link al programa del curso.
      </p>

      <p class="modalDesc">
        Por ningún motivo, recomendamos el sumar cursos que no tengan que ver con
        el área del puesto que estás buscando, por ejemplo: Si estás buscando trabajo 
        en el área de Desarrollo Web, no se verá bien el agregar cursos realizados sobre
        defensa personal, cocina o similares que no le aporten nada a la oportunidad
        laboral que estás buscando.
      </p>
      `,
  },
  {
    id: "toogleModalIdiomas",
    title: "Idiomas",
    desc: `
      <p class="modalDesc">
        Lo único que de verdad importa a la hora de especificar los diferentes
        idiomas que hablas, es el "nivel" alcanzado hasta la fecha. A ningún recruiter
        le interesará dónde y cómo aprendiste a hablar tal idioma, sino el grado de 
        fluidés escrito y por sobre todo oral que manejas actualmente. 
      </p>

      <p class="modalDesc">
        En el caso de solo hablar tu idioma natal, en primer lugar te recomendamos
        no sumar al mismo como parte de los idiomas que hablas por ser algo ya sabido, 
        y en segudno lugar, directamente no incluir la sección de idiomas dejando más
        espacio para el resto de las áreas. En la actualidad, el idioma inglés es sumamemnte
        demandado en un gran porcentaje de áreas, en especial la industria IT, representando
        un skill casi fundamental para el puesto que estás buscando. 
      </p>
      `,
  },
  {
    id: "toogleModalFormAc",
    title: "Formación académica",
    desc: `
      <p class="modalDesc">
        La formación académica se refiere a tus estudios secundarios, terciarios
        o universitarios alcanzados hasta la fecha o en curso. No hará falta, en la
        mayoría de los casos, agregar la formación primaria salvo que el puesto lo 
        demande. 
      </p>

      <p class="modalDesc">  
        En cada campo recomendamos, mantener la misma estructura que con la
        experiencia profesional y lo cursos realizados: Nombre del grado de estudios, 
        año de inicio y sece de actividades, institución o escuela donde lo cursaste
        y nada más. No hará falta agregar las materias aprobadas ni otra información
        de relleno como logotipos, etc.
      </p>
      `,
  },
];

modalList.forEach((modalInfo) => {
  let element = document.getElementById(modalInfo.id);
  if (element) {
    element.addEventListener("click", () => {
      initModal(modalInfo.title, modalInfo.desc);
      $(".tipsModal").modal("show");
    });
  }
});
