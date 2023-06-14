// Estado inicial do jogo
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';

// Função chamada quando uma jogada é feita
function makeMove(row, col) {
    // Verifica se a célula está vazia
    if (board[row][col] === '') {
        // Marca a célula com o símbolo do jogador atual
        board[row][col] = currentPlayer;
        
        // Atualiza o texto da célula no DOM
        document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;
        
        // Verifica se o jogador atual venceu
        if (checkWin(currentPlayer)) {
            alert('O jogador ' + currentPlayer + ' venceu!');
            resetBoard();
            return;
        }
        
        // Verifica se o tabuleiro está cheio (empate)
        if (checkTie()) {
            alert('Empate!');
            resetBoard();
            return;
        }
        
        // Alterna o jogador atual
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Verifica se o jogador atual venceu
function checkWin(player) {
    // Verifica linhas
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
            return true;
        }
    }
    
    // Verifica colunas
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
            return true;
        }
    }
    
    // Verifica diagonais
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    
    if (board[2][0] === player && board[1][1] === player && board[0][2] === player) {
        return true;
    }
    
    return false;
}

// Verifica se o tabuleiro está cheio (empate)
function checkTie() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

// Reinicia o tabuleiro
function resetBoard() {
    // Limpa o estado do tabuleiro
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    
    // Limpa o texto das células no DOM
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    
    // Reinicia o jogador atual
    currentPlayer = 'X';
}
