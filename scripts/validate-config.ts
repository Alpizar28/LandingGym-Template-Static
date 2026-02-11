
import fs from 'fs';
import path from 'path';
import { ConfigDataSchema } from '../lib/config-schema';

const CONFIG_PATH = path.join(process.cwd(), 'data', 'config.json');

async function validate() {
    console.log('🔍 Validating configuration...');

    try {
        if (!fs.existsSync(CONFIG_PATH)) {
            throw new Error(`Config file not found at: ${CONFIG_PATH}`);
        }

        const rawData = fs.readFileSync(CONFIG_PATH, 'utf-8');
        const json = JSON.parse(rawData);

        const result = ConfigDataSchema.safeParse(json);

        if (!result.success) {
            console.error('❌ Configuration validation failed:');
            result.error.issues.forEach((issue) => {
                console.error(`  - Path: ${issue.path.join('.')} | Error: ${issue.message}`);
            });
            process.exit(1);
        }

        console.log('✅ Configuration is valid!');
    } catch (error) {
        console.error('❌ Validation error:', error);
        process.exit(1);
    }
}

validate();
