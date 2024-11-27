import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import csvParser from 'csv-parser'; // Importação correta

// Configuração do banco de dados PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'taco_bd',
    password: '*Janeiro2024',
    port: 5432,
});

// Função para criar as tabelas
async function criarTabelas() {
    const queries = [
        `
      CREATE TABLE IF NOT EXISTS grupo (
        id INT PRIMARY KEY,
        gru_descricao VARCHAR(255) NOT NULL
      );
    `,
        `
      CREATE TABLE IF NOT EXISTS preparacao (
        id INT PRIMARY KEY,
        pre_descricao VARCHAR(255) NOT NULL
      );
    `,
        `
      CREATE TABLE IF NOT EXISTS produto (
        id INT PRIMARY KEY,
        pro_descricao VARCHAR(255) NOT NULL,
        pro_grupo INT REFERENCES grupo(id)
      );
    `,
        `
      CREATE TABLE IF NOT EXISTS prodprep (
        id INT NOT NULL,
        prp_preparacao INT NOT NULL,
        prp_energia REAL,
        prp_proteina REAL,
        prp_lipideos REAL,
        prp_carboidrato REAL,
        prp_fibra REAL,
        prp_colesterol REAL,
        prp_agsaturado REAL,
        prp_agmono REAL,
        prp_agpoli REAL,
        prp_aglinoleico REAL,
        prp_aglinolenico REAL,
        prp_agtranstotal REAL,
        prp_acucartotal REAL,
        prp_acucaradicao REAL,
        prp_calcio REAL,
        prp_magnesio REAL,
        prp_manganes REAL,
        prp_fosforo REAL,
        prp_ferro REAL,
        prp_sodio REAL,
        prp_sodioadicao REAL,
        prp_potassio REAL,
        prp_cobre REAL,
        prp_zinco REAL,
        prp_selenio REAL,
        prp_retinol REAL,
        prp_vitamina_a REAL,
        prp_tiamina REAL,
        prp_riboflavina REAL,
        prp_niacina REAL,
        prp_niacina_ne REAL,
        prp_piridoxina REAL,
        prp_cobalamina REAL,
        prp_folato REAL,
        prp_vitamina_d REAL,
        prp_vitamina_e REAL,
        prp_vitamina_c REAL,
        PRIMARY KEY (id, prp_preparacao)
      );
    `,
    ];

    try {
        for (const query of queries) {
            console.log(`Executando: ${query}`);
            await pool.query(query);
        }
        console.log('Tabelas criadas com sucesso.');
    } catch (error) {
        console.error('Erro ao criar as tabelas:', error);
        process.exit(1);
    }
}

// Função para garantir o caminho correto dos arquivos CSV
function getFilePath(fileName: string): string {
    return path.join(__dirname, '..', 'importador', 'dados', fileName);
}

// Função genérica para importar CSV
async function importarCSV(
    caminho: string,
    query: string,
    camposEsperados: number
) {
    console.log(`Importando arquivo: ${caminho}`);
    const stream = fs.createReadStream(caminho).pipe(
        csvParser({
            separator: ';',
            mapHeaders: ({ header }) => header.trim(), // Remove espaços dos cabeçalhos
        })
    );

    for await (const row of stream) {
        console.log(`Lendo linha: ${JSON.stringify(row)}`);

        // Função para substituir vírgula por ponto somente em números
        const formatarValor = (valor: string) => {
            const valorTrim = valor.trim();
            return isNaN(Number(valorTrim.replace(',', '.')))
                ? valorTrim // Mantém o valor original se não for número
                : valorTrim.replace(',', '.'); // Substitui vírgula por ponto
        };

        // Processa cada valor da linha com a função de formatação
        const valores = Object.values(row)
            .map((valor) => (typeof valor === 'string' ? formatarValor(valor) : valor))
            .filter((valor) => valor !== ''); // Remove campos vazios

        if (valores.length !== camposEsperados) {
            console.error(
                `Erro: esperava ${camposEsperados} parâmetros, mas recebeu ${valores.length}. Linha: ${JSON.stringify(row)}`
            );
            continue;
        }

        try {
            await pool.query(query, valores);
            console.log(`Inserção bem-sucedida: ${JSON.stringify(valores)}`);
        } catch (err) {
            console.error(`Erro ao inserir dados: ${(err as Error).message}`);
        }
    }
    console.log(`Importação de ${caminho} concluída.`);
}

// Funções específicas para cada importação
async function importarGrupo() {
    const query = 'INSERT INTO grupo (id, gru_descricao) VALUES ($1, $2)';
    const caminho = getFilePath('grupo.csv');
    await importarCSV(caminho, query, 2);
}

async function importarPreparacao() {
    const query = 'INSERT INTO preparacao (id, pre_descricao) VALUES ($1, $2)';
    const caminho = getFilePath('preparacao.csv');
    await importarCSV(caminho, query, 2);
}

async function importarProduto() {
    const query = 'INSERT INTO produto (id, pro_descricao, pro_grupo) VALUES ($1, $2, $3)';
    const caminho = getFilePath('produto.csv');
    await importarCSV(caminho, query, 3);
}

async function importarProdPrep() {
    const query = `
    INSERT INTO prodprep (
      id, prp_preparacao, prp_energia, prp_proteina, prp_lipideos, 
      prp_carboidrato, prp_fibra, prp_colesterol, prp_agsaturado, prp_agmono, 
      prp_agpoli, prp_aglinoleico, prp_aglinolenico, prp_agtranstotal, 
      prp_acucartotal, prp_acucaradicao, prp_calcio, prp_magnesio, prp_manganes, 
      prp_fosforo, prp_ferro, prp_sodio, prp_sodioadicao, prp_potassio, 
      prp_cobre, prp_zinco, prp_selenio, prp_retinol, prp_vitamina_a, 
      prp_tiamina, prp_riboflavina, prp_niacina, prp_niacina_ne, prp_piridoxina, 
      prp_cobalamina, prp_folato, prp_vitamina_d, prp_vitamina_e, prp_vitamina_c
    ) VALUES (
      $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
      $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, 
      $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, 
      $31, $32, $33, $34, $35, $36, $37, $38, $39
    );
  `;
    const caminho = getFilePath('prodprep.csv');
    await importarCSV(caminho, query, 39);
}

// Função principal para executar todas as importações
async function executarImportacao() {
    try {
        console.log('Iniciando importações...');
        await criarTabelas();
        await importarGrupo();
        await importarPreparacao();
        await importarProduto();
        await importarProdPrep();
        console.log('Todas as importações foram concluídas com sucesso.');
    } catch (error) {
        console.error('Erro ao executar as importações:', error);
    } finally {
        await pool.end();
    }
}

// Inicia a execução das importações
executarImportacao();
