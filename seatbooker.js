/**
 * @author Eivin Giske Skaaren
 */

//Array for seats
var seatArr = new Array();
for(var i = 0; i < 18; i++) {
	seatArr[i] = 0;
}

function bookSeat(seat) {
	if(document.getElementById('bookedseat').innerHTML != "") {
		alert("Seat already booked, unbook seat if you want to coose another.")
	} else if(seatArr[seat - 1] == 0) {
		seatArr[seat - 1] = 1;
		var id = 'b' + seat;
		document.getElementById(id).innerHTML = '<input type="button" value="' + seat + '" class="buttontaken" onclick="unBook(' + seat + ')" />';
		document.getElementById('bookedseat').innerHTML = seat;
	} else
		alert("Seat taken!");
}

function unBook(seat) {
	if(seatArr[seat - 1] != 0) {
		seatArr[seat - 1] = 0;
		var id = 'b' + seat;
		document.getElementById(id).innerHTML = '<input type="button" value="' + seat + '" class="buttonfree" onclick="bookSeat(' + seat + ')" />';
		document.getElementById('bookedseat').innerHTML = "";
	}
}

function biz(checkbox) {
	var el = document.getElementById('bookedseat').innerHTML;
	if(el != "") {
		seatArr[el - 1] = 0;
		document.getElementById('bookedseat').innerHTML = "";
	}
	if(checkbox.checked) {
		for(var i = 0; i < 6; i++) {
			if(seatArr[i] == 0) {
				var id = 'b' + (i + 1);
				document.getElementById(id).innerHTML = '<input type="button" value="' + (i + 1) + '" class="buttonfree" onclick="bookSeat(' + (i + 1) + ')" />';
			}
		}
		for(var i = 6; i < 18; i++) {
			if(seatArr[i] == 0) {
				var id = 'b' + (i + 1);
				document.getElementById(id).innerHTML = '<input type="button" value="' + (i + 1) + '" class="buttonunavail" onclick="alert(\'Not business class!\')" />';
			}
		}
	} else {
		for(var i = 0; i < 6; i++) {
			if(seatArr[i] == 0) {
				var id = 'b' + (i + 1);
				document.getElementById(id).innerHTML = '<input type="button" value="' + (i + 1) + '" class="buttonunavail" onclick="alert(\'Not economy class!\')" />';
			}
		}
		for(var i = 6; i < 18; i++) {
			if(seatArr[i] == 0) {
				var id = 'b' + (i + 1);
				document.getElementById(id).innerHTML = '<input type="button" value="' + (i + 1) + '" class="buttonfree" onclick="bookSeat(' + (i + 1) + ')" />';
			}
		}
	}
}

function printBoard(form) {
	var fn = form.firstName.value;
	var ln = form.lastName.value;
	if(document.getElementById('bookedseat').innerHTML != "" && fn != "" && ln != "") {
		seat = document.getElementById('bookedseat').innerHTML;
		w = window.open("", "newwin", "height=400, width=400");
		w.document.writeln('----------------------------------------<br />');
		w.document.writeln('Boarding card<br />');
		w.document.writeln('----------------------------------------<br />');
		w.document.writeln('Name: ' + fn + ' ' + ln + '<br />');
		w.document.writeln('Seat: ' + seat);

		form.firstName.value = "";
		form.lastName.value = "";
		id = 'b' + seat;
		document.getElementById(id).innerHTML = '<input type="button" value="' + seat + '" class="buttontaken" onclick="bookSeat(' + seat + ')" />';
		document.getElementById('bookedseat').innerHTML = "";
		form.bizClass.checked = 0;
		biz(form.bizClass);
	} else
		alert("Fill in name and choose a seat!!");
}