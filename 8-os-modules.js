const os = require('os')

// info sobre meu usuário

const user = os.userInfo();


// Método que retorna o tempo de atividade

console.log(`O tempo de atividade do sistema é: ${os.uptime()} seconds`);

const currentOs = {
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);