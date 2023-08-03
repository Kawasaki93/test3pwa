let variable1;
for (var x = 1; x < 192; x++) {
  let cloned_element = $(".sunbed").first().clone();
  cloned_element.attr("id", "clon_" + x);
  
  if (x === 6) {
    cloned_element.find(".sunbed_name").html(85); // Asigna 85 al clon número 6
  } else if (x === 7) {
    cloned_element.find(".sunbed_name").html(84); // Asigna 84 al clon número 7
  } else if (x === 8) {
    cloned_element.find(".sunbed_name").html(83); // Asigna 83 al clon número 8
  } else if (x === 9) {
    cloned_element.find(".sunbed_name").html(82); // Asigna 82 al clon número 9
  } else if (x === 10) {
    cloned_element.find(".sunbed_name").html(81); // Asigna 81 al clon número 10
  } else if (x === 15) {
    cloned_element.find(".sunbed_name").html(80); // Asigna 80 al clon número 15
  } else if (x === 12 || x === 13 || x === 14) {
    cloned_element.find(".sunbed_name").html("X"); // Cambia el contenido de los clones 12, 13 y 14 a "X"
  } else if (x === 16) {
    cloned_element.find(".sunbed_name").html(77); // Asigna 77 al clon número 16
  } else if (x === 17) {
    cloned_element.find(".sunbed_name").html(76); // Asigna 76 al clon número 17
  } else if (x === 18) {
    cloned_element.find(".sunbed_name").html(75); // Asigna 75 al clon número 18
  } else if (x === 19) {
    cloned_element.find(".sunbed_name").html(73); // Asigna 73 al clon número 19
  } else if (x === 20) {
    cloned_element.find(".sunbed_name").html(72); // Asigna 72 al clon número 20
  } else if (x === 21) {
    cloned_element.find(".sunbed_name").html(71); // Asigna 71 al clon número 21
  } else if (x === 22) {
    cloned_element.find(".sunbed_name").html(70); // Asigna 70 al clon número 22
  } else if (x === 24) {
    cloned_element.find(".sunbed_name").html("69A"); // Asigna "69A" al clon número 24
  } else if (x === 25) {
    cloned_element.find(".sunbed_name").html(69); // Asigna 69 al clon número 25
  } else if (x >= 26 && x <= 34) {
    cloned_element.find(".sunbed_name").html(69 - (x - 25)); // Asigna los números del 69 al 60 a los clones del 26 al 34
  } else if (x === 36) {
    cloned_element.find(".sunbed_name").html("59A"); // Asigna "59A" al clon número 36
  } else if (x === 37) {
    cloned_element.find(".sunbed_name").html(59); // Asigna 59 al clon número 37
  } else if (x === 38) {
    cloned_element.find(".sunbed_name").html(58); // Asigna 58 al clon número 38
  } else if (x === 39) {
    cloned_element.find(".sunbed_name").html(57); // Asigna 57 al clon número 39
  } else if (x === 40) {
    cloned_element.find(".sunbed_name").html(56); // Asigna 56 al clon número 40
  } else if (x === 41) {
    cloned_element.find(".sunbed_name").html(55); // Asigna 55 al clon número 41
  } else if (x === 42) {
    cloned_element.find(".sunbed_name").html(54); // Asigna 54 al clon número 42
  } else if (x === 43) {
    cloned_element.find(".sunbed_name").html(53); // Asigna 53 al clon número 43
  } else if (x === 44) {
    cloned_element.find(".sunbed_name").html(52); // Asigna 52 al clon número 44
  } else if (x === 45) {
    cloned_element.find(".sunbed_name").html(51); // Asigna 51 al clon número 45
  } else if (x === 46) {
    cloned_element.find(".sunbed_name").html(50); // Asigna 50 al clon número 46
  } else if (x === 48) {
    cloned_element.find(".sunbed_name").html("49A"); // Asigna "49A" al clon número 48
  } else if (x === 49) {
    cloned_element.find(".sunbed_name").html(49); // Asigna 49 al clon número 49
  } else if (x === 50) {
    cloned_element.find(".sunbed_name").html(48); // Asigna 48 al clon número 50
  } else if (x === 51) {
    cloned_element.find(".sunbed_name").html(47); // Asigna 47 al clon número 51
  } else if (x === 52) {
    cloned_element.find(".sunbed_name").html(46); // Asigna 46 al clon número 52
  } else if (x === 53) {
    cloned_element.find(".sunbed_name").html(45); // Asigna 45 al clon número 53
  } else if (x === 54) {
    cloned_element.find(".sunbed_name").html(44); // Asigna 44 al clon número 54
  } else if (x === 55) {
    cloned_element.find(".sunbed_name").html(43); // Asigna 43 al clon número 55
  } else if (x === 56) {
    cloned_element.find(".sunbed_name").html(42); // Asigna 42 al clon número 56
  } else if (x === 57) {
    cloned_element.find(".sunbed_name").html(41); // Asigna 41 al clon número 57
  } else if (x === 58) {
    cloned_element.find(".sunbed_name").html(40); // Asigna 40 al clon número 58
  } else if (x === 60) {
    cloned_element.find(".sunbed_name").html("39A"); // Asigna "39A" al clon número 60
  } else if (x === 61) {
    cloned_element.find(".sunbed_name").html(39); // Asigna 39 al clon número 61
  } else if (x === 62) {
    cloned_element.find(".sunbed_name").html(38); // Asigna 38 al clon número 62
  } else if (x === 63) {
    cloned_element.find(".sunbed_name").html(37); // Asigna 37 al clon número 63
  } else if (x === 64) {
    cloned_element.find(".sunbed_name").html(36); // Asigna 36 al clon número 64
  } else if (x === 65) {
    cloned_element.find(".sunbed_name").html(35); // Asigna 35 al clon número 65
  } else if (x === 66) {
    cloned_element.find(".sunbed_name").html(34); // Asigna 34 al clon número 66
  } else if (x === 67) {
    cloned_element.find(".sunbed_name").html(33); // Asigna 33 al clon número 67
  } else if (x === 68) {
    cloned_element.find(".sunbed_name").html(32); // Asigna 32 al clon número 68
  } else if (x === 69) {
    cloned_element.find(".sunbed_name").html(31); // Asigna 31 al clon número 69
  } else if (x === 70) {
    cloned_element.find(".sunbed_name").html(30); // Asigna 30 al clon número 70
  } else if (x === 72) {
    cloned_element.find(".sunbed_name").html("29A"); // Asigna "29A" al clon número 72
  } else if (x === 73) {
    cloned_element.find(".sunbed_name").html(29); // Asigna 29 al clon número 73
  } else if (x === 74) {
    cloned_element.find(".sunbed_name").html(28); // Asigna 28 al clon número 74
  } else if (x === 75) {
    cloned_element.find(".sunbed_name").html(27); // Asigna 27 al clon número 75
  } else if (x === 76) {
    cloned_element.find(".sunbed_name").html(26); // Asigna 26 al clon número 76
  } else if (x === 77) {
    cloned_element.find(".sunbed_name").html(25); // Asigna 25 al clon número 77
  } else if (x === 78) {
    cloned_element.find(".sunbed_name").html(24); // Asigna 24 al clon número 78
  } else if (x === 79) {
    cloned_element.find(".sunbed_name").html(23); // Asigna 23 al clon número 79
  } else if (x === 80) {
    cloned_element.find(".sunbed_name").html(22); // Asigna 22 al clon número 80
  } else if (x === 81) {
    cloned_element.find(".sunbed_name").html(21); // Asigna 21 al clon número 81
  } else if (x === 82) {
    cloned_element.find(".sunbed_name").html(20); // Asigna 20 al clon número 82
  } else if (x === 83) {
    cloned_element.find(".sunbed_name").html("20A"); // Asigna "20A" al clon número 83
  } else if (x === 84) {
    cloned_element.find(".sunbed_name").html("19A"); // Asigna "19A" al clon número 84
  } else if (x === 85) {
    cloned_element.find(".sunbed_name").html(19); // Asigna 19 al clon número 85
  } else if (x === 86) {
    cloned_element.find(".sunbed_name").html(18); // Asigna 18 al clon número 86
  } else if (x === 87) {
    cloned_element.find(".sunbed_name").html(17); // Asigna 17 al clon número 87
  } else if (x === 88) {
    cloned_element.find(".sunbed_name").html(16); // Asigna 16 al clon número 88
  } else if (x === 89) {
    cloned_element.find(".sunbed_name").html(15); // Asigna 15 al clon número 89
  } else if (x === 90) {
    cloned_element.find(".sunbed_name").html(14); // Asigna 14 al clon número 90
  } else if (x === 91) {
    cloned_element.find(".sunbed_name").html(13); // Asigna 13 al clon número 91
  } else if (x === 92) {
    cloned_element.find(".sunbed_name").html(12); // Asigna 12 al clon número 92
  } else if (x === 93) {
    cloned_element.find(".sunbed_name").html(11); // Asigna 11 al clon número 93
  } else if (x === 94) {
    cloned_element.find(".sunbed_name").html(10); // Asigna 10 al clon número 94
  } else if (x === 95) {
    cloned_element.find(".sunbed_name").html("10A"); // Asigna "10A" al clon número 95
  } else {
    cloned_element.find(".sunbed_name").html(x); // Asigna el valor de x a los demás clones

  }
  
  $(".beach_wrapper").append(cloned_element);
}

//CLONES COLOR NARANJA
$("#clon_15,#clon_103,#clon_104,#clon_105,#clon_106,#clon_111,#clon_112,#clon_113,#clon_114,#clon_115,#clon_116,#clon_117,#clon_118,#clon_119,#clon_120,#clon_121,#clon_122,#clon_123,#clon_124,#clon_125,#clon_126,#clon_127,#clon_128,#clon_129,#clon_130,#clon_131,#clon_132,#clon_133,#clon_134,#clon_135,#clon_136,#clon_137,#clon_138,#clon_139,#clon_140,#clon_141,#clon_142,#clon_143,#clon_144,#clon_145,#clon_146,#clon_147,#clon_148,#clon_149,#clon_150,#clon_151,#clon_152,#clon_153,#clon_154,#clon_155,#clon_156,#clon_157,#clon_158,#clon_159,#clon_160,#clon_161,#clon_162,#clon_163,#clon_164,#clon_165,#clon_166,#clon_167,#clon_168,#clon_169,#clon_170,#clon_171,#clon_172,#clon_173,#clon_174,#clon_175,#clon_176,#clon_177,#clon_178,#clon_179,#clon_180,#clon_181,#clon_182,#clon_183,#clon_184,#clon_185,#clon_186,#clon_187,#clon_188,#clon_189,#clon_190,#clon_191").addClass('especiales');
//CLONES DESCONECTADOS GENERALES
$("#clon_23,#clon_35,#clon_47,#clon_59,#clon_71,#clon_83,#clon_97,#clon_98,#clon_99,#clon_100,#clon_101,#clon_107,#clon_119,#clon_131,#clon_143,#clon_155,#clon_167").addClass('desconectadosgeneral');
//CLONES DESCONECTADOS PRIMERA FILA(REVELAR AÑADIENDO UN 1)
$("#clon_84,#clon_85,#clon_86,#clon_87,#clon_88,#clon_89,#clon_90,#clon_91,#clon_92,#clon_93,#clon_94,#clon_95").addClass("desconectadosfila11");
//CLONES DESCONECTADOS SEGUNDA FILA(REVELAR AÑADIENDO UN 2)
$("#clon_72,#clon_73,#clon_74,#clon_75,#clon_76,#clon_77,#clon_78,#clon_79,#clon_80,#clon_81,#clon_82,#clon_83,#clon_84").addClass("desconectadosfila22");
//CLONES DESCONECTADOS OCTAVA FILA(REVELAR AÑADIENDO UN 8)
$("#clon_1,#clon_2,#clon_3,#clon_4,#clon_5,#clon_11").addClass("desconectadosfila88");
//CLONES MAGNETA CARPA
$("#sunbed,#clon_12,#clon_13,#clon_14,#clon_108,#clon_109,#clon_110").addClass('intocables');
//CLONES CON FORMA DE SOMBRILLA RECTANGULO REDONDO
$("#clon_75,#clon_76,#clon_77,#clon_78,#clon_79,#clon_83,#clon_84,#clon_85,#clon_86,#clon_87,#clon_88,#clon_89,#clon_90,#clon_91,#clon_92,#clon_93,#clon_94,#clon_95,#clon_96,#clon_168,#clon_169,#clon_170,#clon_171,#clon_172,#clon_173,#clon_174,#clon_175,#clon_176,#clon_177,#clon_178,#clon_179,#clon_180,#clon_181,#clon_182,#clon_183,#clon_184,#clon_185,#clon_186,#clon_187,#clon_188,#clon_189,#clon_190,#clon_191").addClass('primerafila');
//DE LA 1ª FILA Del 84 al 95.
//DE la 2º FILA del 72 al 83
//DE la 3º FILA DEL 60 AL 70
//DE LA 4º FILA DEL 48 AL 58
//DE LA 5ª FILA DEL 36 AL 46
//DE LA 6ª FILA DEL 24 AL 34
//DE LA 7ª FILA DEL 12 AL 22
//DE LA 8ª FILA DEL 1 AL 10

//Clicking function
function handle_shopping_cart_amount(amount) {
    shopping_cart = shopping_cart + amount;
    localStorage.setItem('shopping_cart', shopping_cart);
    SunbedController.update_prices();
}

function reset_shopping_cart_amount() {
    shopping_cart = 0;
    localStorage.setItem('shopping_cart', 0);
    SunbedController.update_prices();
}


function enviarcesta() {
    var actual_value = localStorage.getItem('shopping_cart');
    total_sold = parseInt(total_sold) + parseInt(actual_value);
    localStorage.setItem('total_sold', total_sold);
    console.log(actual_value);
    $("#totalcesta").html(total_sold);
    reset_shopping_cart_amount();
    SunbedController.update_prices();
}


function handle_cart_to_total_sold() {
    total_sold = total_sold + shopping_cart;
    reset_shopping_cart_amount();
    SunbedController.update_prices();
}


//clear localstorage
function clearClick(number) {
    localStorage.clear();
    window.location.reload();
}


var SunbedController = function() {
    return {
        init: function() {
            this.bind_listeners();
            this.restore_customers_name();
            this.restore_sunbeds_colors();
            this.retreive_prices();
            this.restore_comments();
            this.restore_total_sold();
        },

        bind_listeners: function() {
            $("input.customer_name").keyup(function () {
                var text = $(this).val();
                var target_id = $(this).closest(".sunbed").attr('id');
                let target_key = 'customer_name' + target_id;
                localStorage.setItem(target_key, text);
            });

            $("#comments").keyup(function() {
               let actual_value = $(this).val();
               localStorage.setItem('comments', actual_value);
            });

            //bucle de colores
            $('.toggle').dblclick(function () {
                let arr_steps = [1, 2, 3, 4, 5, 6],
                    step = parseInt($(this).data('actual-step')) || 0,
                    nuevo_step = (step === arr_steps.length) ? 1 : step + 1;

                $(this).removeClass('step' + step);
                $(this).addClass('step' + nuevo_step);
                $(this).data('actual-step', nuevo_step);

                let actual_id = $(this).attr('id'),
                    target_key = 'sunbed_color' + actual_id;

                localStorage.setItem(target_key, nuevo_step);
            });
        },

        restore_customers_name: function() {
            $("input.customer_name").each(function () {
                let actual_id = $(this).closest(".sunbed").attr('id');
                let target_key = 'customer_name' + actual_id;

                let target_value = localStorage.getItem(target_key);

                if (target_value) {
                    $(this).val(target_value);
                }
            });
        },

        restore_sunbeds_colors: function() {
            $(".sunbed").each(function() {
                let actual_id = $(this).attr('id'),
                    target_key = 'sunbed_color' + actual_id;

                let target_step = localStorage.getItem(target_key);
                if (target_step) {
                    $(this).addClass('step' + target_step);
                    $(this).data('actual-step', target_step);
                }
             
            });
        },

        retreive_prices: function() {
            shopping_cart = 0;
            total_sold = 0;

            var saved_total = localStorage.getItem('total_sold');
            if (saved_total) {
                total_sold = parseInt(saved_total);
            }

            var saved_shopping_cart = localStorage.getItem('shopping_cart');
            if (saved_shopping_cart) {
                shopping_cart = parseInt(saved_shopping_cart);
            }

            this.update_prices();
        },

        update_prices: function() {
            $("#shopping_cat_value").html(shopping_cart);
            $("#total_price_value").html(total_sold);
        },

        reset_local_storage_except_customers: function () {           
            Object.keys(localStorage).forEach(function (local_key) {
                if (local_key.indexOf('customer_name') === -1) {
                    localStorage.removeItem(local_key);
                }
            });

            window.location.reload();
        },

        restore_comments: function () {
            var old_comments = localStorage.getItem('comments');
            if (old_comments) {
                $("#comments").val(old_comments);
            }
        },
      
      restore_total_sold: function(){
        localStorage.getItem(total_sold);
        localStorage.removeItem(total_sold);
      }
    };
}();

SunbedController.init();
