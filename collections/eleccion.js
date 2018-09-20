import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

SimpleSchema.setDefaultMessages({
    initialLanguage: 'es',
    messages: {
      es: {
        required: '{{label}} es requerido',
        yaProgramado : "Materia ya Programada"
      },
      en: {
        required: '{{label}} es required',
        yaProgramado : "Materia ya Programada"
      },
    },
});

eleccion = new Mongo.Collection("eleccion");

botoSchema = new SimpleSchema({
    mesa : {
        type : Number,
        label: "Mesa",
        optional : false
    },
    botos : {
        type :Number,
        label : "Botos",
        optional : false
    }
},{tracker: Tracker});

partidoSchema = new SimpleSchema({
    nombre : {
        type : String,
        label: "Nombre del Partido",
        max : 100,
        optional : false
    },
    descripcion : {
        type :String,
        label : "Descripcion",
        optional : true
    },
    botos : {
        type : Array,
        optional : true,
    },
    'botos.$': {
        type : botoSchema
    }
},{tracker: Tracker});

eleccionSchema = new SimpleSchema({
    nombre : {
        type : String,
        label: "Nombre del Proceso Eleccionario",
        max : 100,
        optional : false
    },
    descripcion : {
        type :String,
        label : "Descripcion",
        optional : true
    },
    partidos : {
        type : Array,
        optional : false
    },
    'partidos.$': {
        type: partidoSchema
    }
},{tracker: Tracker});

eleccion.attachSchema(eleccionSchema);