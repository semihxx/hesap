var m2 = 0;

function hesapla(form) {
    m2 = Math.round(eval(form.metrekare.value));
    if (m2 > 0) {

        alcipanfx = Math.ceil(m2 * 1);
        form.alcipanfx.value = alcipanfx + " m2"

        artfixTC = Math.ceil(m2 * 3.20 / 3);
        form.artfixTC.value = artfixTC + " boy"

        artfixTU = Math.ceil(m2 * 0.4 / 3);
        form.artfixTU.value = artfixTU + " boy"

        celikdubel = Math.ceil(m2 * 1.2);
        form.celikdubel.value = celikdubel + " adet"

        askiteli = Math.ceil(m2 * 1.2);
        form.askiteli.value = askiteli + " adet"

        askimasasi = Math.ceil(m2 * 1.2);
        form.askimasasi.value = askimasasi + " adet"

        klips = Math.ceil(m2 * 4.6);
        form.klips.value = klips + " adet"

        eklemeparcasi = Math.ceil(m2 * 0.6);
        form.eklemeparcasi.value = eklemeparcasi + " adet"

        borozanvida = Math.ceil(m2 * 17)
        form.borozanvida.value = borozanvida + " adet"

        derzbandi = Math.ceil(m2 * 1.2 / 90)
        form.derzbandi.value = derzbandi + " rulo"

        dugagipsderzdolgu = Math.ceil(m2 * 0.4 / 30);
        form.dugagipsderzdolgu.value = dugagipsderzdolgu + " torba"

        dubelvida = Math.ceil(m2 * 0.4);
        form.dubelvida.value = dubelvida + " adet"

    } else {
        alert("HATA: m² \"0\" dan büyük olmalıdır!");
        document.forms[0].metrekare.focus();
    }

}