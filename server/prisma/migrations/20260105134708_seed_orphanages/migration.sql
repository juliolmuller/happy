INSERT INTO "orphanages" (
  "id",
  "name",
  "about",
  "latitude",
  "longitude",
  "instructions",
  "opening_hours",
  "open_on_weekends",
  "created_at",
  "updated_at"
) VALUES
  (
    'cmk17bmd3000104l41itvhoox',
    'Lar das Gurias',
    'Dolorum at placeat. Sit suscipit omnis molestias ullam occaecati et voluptates. Eligendi ab est quis rerum occaecati.\nItaque ex dicta asperiores esse non voluptatem quia. Rerum molestiae ex et dolorem temporibus ipsa officia consectetur. Iure velit aspernatur necessitatibus. Quos ullam culpa earum. Molestiae praesentium magni praesentium recusandae sequi quo tempore voluptatem. Et et et rerum sequi neque ab sed.\nAspernatur temporibus cupiditate rerum dicta corrupti dolor quibusdam excepturi. Voluptatum velit et autem qui. Qui est fuga alias amet quos dicta repellendus ut in. Sed itaque repudiandae eos. Sit consequatur suscipit id eos. Voluptate ipsa et.',
    -25.4720065555,
    -49.2877390981,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id. Tempor orci dapibus ultrices in iaculis.\n  Massa enim nec dui nunc. Blandit cursus risus at ultrices mi tempus. Scelerisque felis imperdiet proin fermentum leo. Ullamcorper dignissim cras tincidunt lobortis.\n  Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eu consequat ac felis donec et odio pellentesque. Tortor condimentum lacinia quis vel eros donec ac.',
    'das 14 às 18h30',
    false,
    '2025-03-30 10:00:00',
    '2025-03-30 10:00:00'
  ),
  (
    'cmk17cg27000604l49uew8w8y',
    'Lar dos Piás',
    'Sunt ut rem. Numquam et dolorem sit. Quaerat enim ipsum non cupiditate et sapiente tempora doloremque. Repudiandae corporis laboriosam numquam quo. Amet et occaecati ipsa quo molestias. Quaerat animi dignissimos natus sunt nulla.\bNecessitatibus aut veritatis voluptatem alias aut consequatur saepe eum quia. Veritatis qui nihil quidem voluptas modi et. Laudantium alias porro sed accusantium voluptas eius et hic omnis.\bQui et corporis et eaque numquam aliquid. Esse porro at. Blanditiis accusantium quisquam odio beatae eos enim.',
    -25.4092252642,
    -49.2392018437,
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id. Tempor orci dapibus ultrices in iaculis.\n  Massa enim nec dui nunc. Blandit cursus risus at ultrices mi tempus. Scelerisque felis imperdiet proin fermentum leo. Ullamcorper dignissim cras tincidunt lobortis.\n  Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Eu consequat ac felis donec et odio pellentesque. Tortor condimentum lacinia quis vel eros donec ac.',
    'das 9 às 17h',
    true,
    '2025-12-18 14:30:00',
    '2025-12-18 14:30:00'
  );

INSERT INTO "orphanage_photos" (
  "id",
  "path",
  "orphanage_id",
  "created_at",
  "updated_at"
) VALUES
  (
    'cmk17d1jw000704l48014brjs',
    'orphanage-image-1.jpg',
    'cmk17bmd3000104l41itvhoox',
    '2025-03-30 10:00:00',
    '2025-03-30 10:00:00'
  ),
  (
    'cmk17df91000804l46ity8oob',
    'orphanage-image-2.jpg',
    'cmk17bmd3000104l41itvhoox',
    '2025-03-30 10:00:00',
    '2025-03-30 10:00:00'
  ),
  (
    'cmk17dx78000904l479nz0c0m',
    'orphanage-image-3.jpg',
    'cmk17bmd3000104l41itvhoox',
    '2025-03-30 10:00:00',
    '2025-03-30 10:00:00'
  ),
  (
    'cmk17eamm000a04l4f62e0a0d',
    'orphanage-image-4.jpg',
    'cmk17bmd3000104l41itvhoox',
    '2025-03-30 10:00:00',
    '2025-03-30 10:00:00'
  ),
  (
    'cmk17eij0000b04l41s3kfron',
    'orphanage-image-1.jpg',
    'cmk17cg27000604l49uew8w8y',
    '2025-12-18 14:30:00',
    '2025-12-18 14:30:00'
  ),
  (
    'cmk17fbbi000e04l41kjubi98',
    'orphanage-image-2.jpg',
    'cmk17cg27000604l49uew8w8y',
    '2025-12-18 14:30:00',
    '2025-12-18 14:30:00'
  ),
  (
    'cmk17f3ws000d04l4axhpgf8c',
    'orphanage-image-3.jpg',
    'cmk17cg27000604l49uew8w8y',
    '2025-12-18 14:30:00',
    '2025-12-18 14:30:00'
  ),
  (
    'cmk17ex8r000c04l400b1c2hw',
    'orphanage-image-4.jpg',
    'cmk17cg27000604l49uew8w8y',
    '2025-12-18 14:30:00',
    '2025-12-18 14:30:00'
  );
