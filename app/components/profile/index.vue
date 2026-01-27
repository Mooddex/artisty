<script setup>

const { user } = useAuth();

</script>

<template>
  <div>
    
    
<!-- Main Content -->
<main class="flex-1 px-4 md:px-10 py-8 lg:px-40 w-full max-w-[1440px] mx-auto">
<!-- Page Heading -->
<div class="flex flex-wrap justify-between items-end gap-3 mb-8">
<ProfileWelcome :user="user" />
<div class="flex items-center gap-2">
    <ArtsSort />
</div>
</div>
<!-- Quick Stats -->
<ProfileQuickStats />
<!-- Active Bids Section -->
<div class="mb-12">
<h2 class="text-[#1c0d0d] dark:text-white tracking-tight text-[28px] font-bold leading-tight mb-6 flex items-center gap-3">
                Active Bids
                <span class="bg-primary/20 text-[#9d4848] dark:text-primary text-xs px-2 py-1 rounded-full font-bold align-middle">3 Updates</span>
</h2>
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
<!-- Card 1: Outbid (Urgent) -->
<div class="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#2a1212] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group">
<div class="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
<div class="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105" data-alt="Oil painting of a sunset over Kyoto temples" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuABTdS5uCd0gtYUfYHnScs3WQizpXzrEfId8S36QuWlQnb0Ho7mebwNvkL4ELQjLKgzVkZomOSfEjM9PCW36Mfj0fV5cjh5qxdQtzAHB-wYuPNTn-88E6HgBtqWMEYymG0G2UHglzgxDawyPQc5CBtwA0J_3EzrLPwOtKCSYc7lE2aCnpONs8nSevNffDP396VsOgSLDi8y1hn5C-XFwxlULHcLhRm8RQy1BzxM6SWI_6Qr3u114wtBNhd4BlAJNQ_GUc1bADOCOY8");'></div>
<div class="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">timer</span> 2h 15m
                        </div>
</div>
<div class="p-5 flex flex-col gap-3 flex-1">
<div class="flex justify-between items-start">
<div>
<p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Yoko Ono</p>
<h3 class="text-[#1c0d0d] dark:text-white text-lg font-bold leading-snug">Sunset in Kyoto</h3>
</div>
<span class="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded text-xs font-black uppercase tracking-wider border border-red-100 dark:border-red-900/50">Outbid</span>
</div>
<div class="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
<div class="flex justify-between items-end mb-4">
<div>
<p class="text-xs text-gray-500 dark:text-gray-400">Current Bid</p>
<p class="text-xl font-bold text-[#1c0d0d] dark:text-white">$450.00</p>
</div>
<div class="text-right">
<p class="text-xs text-gray-500 dark:text-gray-400">Your Max</p>
<p class="text-sm font-medium text-gray-400 line-through">$420.00</p>
</div>
</div>
<button class="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-[#1c0d0d] hover:bg-[#f88f8f] transition-colors text-sm font-bold leading-normal shadow-sm">
                                Increase Bid
                            </button>
</div>
</div>
</div>
<!-- Card 2: Highest Bidder -->
<div class="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#2a1212] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group">
<div class="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
<div class="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105" data-alt="Abstract modern sculpture in bronze" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOrth8igWpslXBNAqPYBc6gz963KkabyPGoDQFNAYSkOozTIyRJhkmjFtpokMYkmF0ZTi7Yu2p4Dp5ciNd2kDge-Cqe5NMGL3CC_UMI1mBbYU6kbcyPTo650QbKh1UA0iRBSfktrYRe_2YBlHyLj0JCKHPKEE0CpPbQnJDZ__Ly6On1xdzV_YDGu6rr6CqNqwp7Zex_6G_gi94iVwssUbJokfCJVLfPZXVaBfSf_tCmm3Kbupj-SAcfYKr_pTvuhG4I55fXsmKlHQ");'></div>
<div class="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 dark:text-gray-200 flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">timer</span> 5h 45m
                        </div>
</div>
<div class="p-5 flex flex-col gap-3 flex-1">
<div class="flex justify-between items-start">
<div>
<p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Alexander H.</p>
<h3 class="text-[#1c0d0d] dark:text-white text-lg font-bold leading-snug">Bronze Form No. 2</h3>
</div>
<span class="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-2 py-1 rounded text-xs font-black uppercase tracking-wider border border-green-100 dark:border-green-900/50">Winning</span>
</div>
<div class="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
<div class="flex justify-between items-end mb-4">
<div>
<p class="text-xs text-gray-500 dark:text-gray-400">Current Bid</p>
<p class="text-xl font-bold text-green-700 dark:text-green-400">$1,250.00</p>
</div>
<div class="text-right">
<p class="text-xs text-gray-500 dark:text-gray-400">Your Bid</p>
<p class="text-sm font-medium text-[#1c0d0d] dark:text-white">$1,250.00</p>
</div>
</div>
<button class="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-gray-100 dark:bg-gray-800 text-[#1c0d0d] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-bold leading-normal">
                                View Auction
                            </button>
</div>
</div>
</div>
<!-- Card 3: Outbid -->
<div class="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-[#2a1212] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-all group">
<div class="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
<div class="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-105" data-alt="Contemporary minimalistic vase on a table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB1xqb8kyKOw44Pe5yhSLY3YIBG2i21p7CDDpCfFG4nDJDaA3mwt69bLk7tdu1FKtGyHKv8cYR3ZY-lJRU0yRZ2zlBbl1i1-3wSUOWWrHgO1gOpw73qz74oIq4m9rNgwldHXzGw6C9C-btJgIj65T9t-canDafsK9BWRAyoplm8pzinq8_t42F0kz0xikh09-QOPyySBx3drqQjX6QRCoptJO6WOvANGPdY9p803__DAh8iH5KdUBN_f9EcgLKR5gB2qgpyl4unoLc");'></div>
<div class="absolute top-3 right-3 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-red-200">
<span class="material-symbols-outlined text-[14px]">warning</span> Ending Soon
                        </div>
</div>
<div class="p-5 flex flex-col gap-3 flex-1">
<div class="flex justify-between items-start">
<div>
<p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Studio 88</p>
<h3 class="text-[#1c0d0d] dark:text-white text-lg font-bold leading-snug">Ceramic Vase</h3>
</div>
<span class="bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-300 px-2 py-1 rounded text-xs font-black uppercase tracking-wider border border-red-100 dark:border-red-900/50">Outbid</span>
</div>
<div class="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
<div class="flex justify-between items-end mb-4">
<div>
<p class="text-xs text-gray-500 dark:text-gray-400">Current Bid</p>
<p class="text-xl font-bold text-[#1c0d0d] dark:text-white">$320.00</p>
</div>
<div class="text-right">
<p class="text-xs text-gray-500 dark:text-gray-400">Your Max</p>
<p class="text-sm font-medium text-gray-400 line-through">$280.00</p>
</div>
</div>
<button class="w-full flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-[#1c0d0d] hover:bg-[#f88f8f] transition-colors text-sm font-bold leading-normal shadow-sm">
                                Increase Bid
                            </button>
</div>
</div>
</div>
</div>
</div>
<!-- Won Auctions Section -->
<div>
<div class="flex items-center justify-between mb-6">
<h2 class="text-[#1c0d0d] dark:text-white tracking-tight text-[28px] font-bold leading-tight">Won Auctions</h2>
<a class="text-sm font-semibold text-primary hover:text-red-400 flex items-center gap-1" href="#">
                    View All History <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
<div class="flex flex-col gap-4">
<!-- Won Item 1 -->
<div class="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-[#2a1212] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-[#3a1a1a]">
<div class="w-full md:w-32 aspect-video md:aspect-square rounded-lg bg-gray-200 bg-cover bg-center" data-alt="Abstract colorful geometric patterns painting" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCh-pfzbRe2LNVTKh2UvmcmU5IuEZr3d6_fzEoDYkjE0BwhrIVu8Ni3XucIL5GCPwjJEK_A3VJVubVdOtsDVljQ5ci6aNjZ8NsIc_KjMJx3IYQINWwDvjPgYS3QgMdLnoXStFp8QHduTxWllYh2MAVocGXrUphSPbmhxx-5IVbI49h5wPCKRkHVHNLXfhhtkjWL425qHrF0tPqsz9OK5ALzZgVB1YURQQz89-AfgYYdAxb1E48Q2p_44MEh5LdCxZtFvcn5UiRGxHs");'></div>
<div class="flex flex-col flex-1 min-w-0 w-full">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
<div>
<h4 class="text-lg font-bold text-[#1c0d0d] dark:text-white truncate">Chromatic Dreams #4</h4>
<p class="text-sm text-gray-500">Sold by <span class="font-medium text-[#1c0d0d] dark:text-gray-300">Elena G.</span> on Oct 24, 2023</p>
</div>
<div class="flex items-center gap-2">
<span class="flex size-2 bg-yellow-400 rounded-full"></span>
<span class="text-sm font-medium text-yellow-700 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">Payment Pending</span>
</div>
</div>
<div class="flex items-center justify-between mt-4 md:mt-2">
<p class="text-xl font-bold text-[#1c0d0d] dark:text-white">$1,100.00</p>
<button class="flex items-center gap-2 text-sm font-bold text-[#1c0d0d] bg-primary px-4 py-2 rounded-lg hover:brightness-105">
<span class="material-symbols-outlined text-[18px]">credit_card</span> Pay Now
                            </button>
</div>
</div>
</div>
<!-- Won Item 2 -->
<div class="flex flex-col md:flex-row items-center gap-4 bg-white dark:bg-[#2a1212] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-[#3a1a1a] opacity-80 hover:opacity-100 transition-opacity">
<div class="w-full md:w-32 aspect-video md:aspect-square rounded-lg bg-gray-200 bg-cover bg-center" data-alt="Black and white street photography print" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzCG44FY0y1ntGSDbaHLbZLSzw3moQ1s9C3OW7B341Z0x0GuEKk9_4xoMrSGl4fHs06uwWvwwkWN6SnYDGzGcxAAM2-tDTJcJaN4xO0BKhZ5FbBiRQPYLw2bXBOmuCYWSIqPOqqMw6ybW7-nooUuY1Y93pKpQ5GBGJTowmeQeQfhg3RqtJ9YMI5zd7qB0MQdRNhoY73POXWUHw_vw7pa2buW326eXEYTTPgsY7Wqh5qVhhf0qe6Tu5YDNxRaHlqnPfCOWfASfho0U");'></div>
<div class="flex flex-col flex-1 min-w-0 w-full">
<div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
<div>
<h4 class="text-lg font-bold text-[#1c0d0d] dark:text-white truncate">Urban Solitude</h4>
<p class="text-sm text-gray-500">Sold by <span class="font-medium text-[#1c0d0d] dark:text-gray-300">Marco Polo</span> on Oct 10, 2023</p>
</div>
<div class="flex items-center gap-2">
<span class="flex size-2 bg-green-500 rounded-full"></span>
<span class="text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">Paid &amp; Shipped</span>
</div>
</div>
<div class="flex items-center justify-between mt-4 md:mt-2">
<p class="text-xl font-bold text-[#1c0d0d] dark:text-white">$850.00</p>
<button class="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                                View Receipt
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>                
  </div>
</template>
