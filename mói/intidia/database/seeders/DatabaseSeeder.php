<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Tạo 10 người dùng mẫu
        User::factory(10)->create();

        // Kiểm tra và tạo một người dùng cụ thể nếu chưa tồn tại
        User::firstOrCreate(
            ['email' => 'test@example.com'],
            [
                'name' => 'Test User',
                'email_verified_at' => now(),
                'password' => bcrypt('password'), // Bạn có thể thay đổi mật khẩu nếu cần
                'remember_token' => \Str::random(10),
            ]
        );

        // Gọi các seeder khác
        $this->call([
            PostSeeder::class,
            // Thêm các seeder khác nếu có
        ]);
    }
}