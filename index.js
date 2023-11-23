
        var x = 300;
        var y = 300;
        var color = 'white';
        
        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
        var recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.lang = 'pt-BR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        
        var diagnostic = document.querySelector('.output');
        var box = document.querySelector('#box');
        
        recognition.onresult = function (event) {
        
          let length = event.results.length;
          let command = event.results[length - 1][0].transcript;
          diagnostic.textContent = 'Resultado recebido: ' + command + '.';
        
          if (command.toLowerCase().indexOf("cardápio") > -1) {
            window.location.href = "cardapio.html";
          }
          else if (command.toLowerCase().indexOf("contato") > -1) {
              window.location.href="#contato";
          }
          else if (command.toLowerCase().indexOf("logo") > -1) {
            window.location.href="index.html";
          }
          else if (command.toLowerCase().indexOf("home") > -1) {
            window.location.href="#";
          }
          else if (command.toLowerCase().indexOf("verde") > -1) {
            color = 'green';
            updateBoxProperties();
          }
          else if (command.toLowerCase().indexOf("azul") > -1) {
            color = 'blue';
            updateBoxProperties();
          }
          else if (command.toLowerCase().indexOf("vermelho") > -1) {
            color = 'red';
            updateBoxProperties();
          }
          else if (command.toLowerCase().indexOf("branco") > -1) {
            color = 'white';
            updateBoxProperties();
          }
        }
        
        function updateBoxProperties() {
          box.style.left = x + "px";
          box.style.top = y + "px";
          box.style.backgroundColor = color;
        }
        
        document.querySelector('#btn-start').onclick = function () {
          recognition.start();
        }
        
        document.querySelector('#btn-stop').onclick = function () {
          recognition.stop();
        }
    
  



 
    document.querySelectorAll('div a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
    
          // Obtém o alvo da âncora
          const targetId = this.getAttribute('href').substring(1);
    
          // Obtém o elemento alvo
          const targetElement = document.getElementById(targetId);
    
          // Rola suavemente para o elemento alvo
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      });


      function openModal() {
        document.getElementById("modal").style.display = "block";
    }

    function closeModal() {
        document.getElementById("modal").style.display = "none";
    }

    document.getElementById("modal-button").addEventListener("click", openModal);
    document.getElementById("close-modal").addEventListener("click", closeModal);

    