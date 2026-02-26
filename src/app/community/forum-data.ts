export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    authorAvatar: string;
    category: string;
    categoryLabel: string;
    tags: string[];
    date: string;
    views: number;
    likes: number;
    comments: number;
    isHot?: boolean;
    isNew?: boolean;
}

export const forumCategories = [
    { id: "all", label: "全部" },
    { id: "voice", label: "有声演播" },
    { id: "video", label: "短视频创作" },
    { id: "ai", label: "AI创作" },
    { id: "income", label: "变现心得" },
];

export const forumPosts: Post[] = [
    {
        id: "1",
        title: "零基础学员如何通过喜播学堂在3个月内拿到第一个商单？",
        excerpt: "很多小伙伴私信问我，完全没经验真的能变现吗？今天分享下我的实战心路历程，从选课到录制，再到最后接单的全套避坑指南...",
        content: `
      <p>很多小伙伴私信问我，完全没经验真的能变现吗？今天分享下我的实战心路历程，从选课到录制，再到最后接单的全套避坑指南。</p>
      <h3>第一阶段：心态建设</h3>
      <p>不要纠结声音好不好听，普通话够不够标准。老师说得对，心意和真实感最重要。</p>
      <h3>第二阶段：刻意练习</h3>
      <p>每天早起半小时跟读，录下来自己听。你会发现进步真的很快。</p>
      <h3>第三阶段：勇于试音</h3>
      <p>不要怕失败，我投了20个标才中第一个。但那100块钱的收入，比我现在的工资还让我兴奋！</p>
    `,
        author: "风中的百合",
        authorAvatar: "🌸",
        category: "voice",
        categoryLabel: "有声演播",
        tags: ["新手入门", "商单实战"],
        date: "2026-02-20",
        views: 1250,
        likes: 88,
        comments: 12,
        isHot: true,
    },
    {
        id: "2",
        title: "2026年AI短视频风口在哪？我的AIGC全能视频实战心得",
        excerpt: "利用AI工具30分钟出一个片子，播放量竟然破了10万。现在的工具已经成熟到这种地步了吗？快来看看我用的魔法助手...",
        content: `
      <p>利用AI工具30分钟出一个片子，播放量竟然破了10万。现在的工具已经成熟到这种地步了吗？</p>
      <p>我主要用到了喜播提供的AI素材库和自动化分镜工具。以前需要剪辑一整天的工作，现在喝杯咖啡的功夫就完成了。</p>
      <p>核心不在于技术，而在于你如何调教AI。好的关键词比好的显卡更重要。</p>
    `,
        author: "AI科技宅",
        authorAvatar: "🤖",
        category: "ai",
        categoryLabel: "AI创作",
        tags: ["AIGC", "短视频"],
        date: "2026-02-24",
        views: 3500,
        likes: 245,
        comments: 56,
        isNew: true,
        isHot: true,
    },
    {
        id: "3",
        title: "在喜播健康不仅收获了知识，还帮我的家庭找回了笑容",
        excerpt: "之前家里老人血糖一直不稳定，通过TLC生活方式医学的系统学习，我们只是微调了生活节奏和饮食结构...",
        content: `
      <p>之前家里老人血糖一直不稳定，全家人都很焦虑。通过TLC生活方式医学的系统学习，我们受益匪浅。</p>
      <p>我们没有采用极端的节食，而是学会了分布式信任和长期健康管理的逻辑。三个月过去了，指标竟然出奇的稳定。</p>
      <p>健康不是治病，而是经营生活。谢谢喜播健康带给我们家的改变。</p>
    `,
        author: "健康掌门人",
        authorAvatar: "🌿",
        category: "income",
        categoryLabel: "变现心得",
        tags: ["生活方式", "家庭健康"],
        date: "2026-02-26",
        views: 890,
        likes: 45,
        comments: 8,
        isNew: true,
    },
    {
        id: "4",
        title: "如何打造高参与度的垂直音频粉丝群？4个实用技巧",
        excerpt: "很多主播反馈互动少。其实你差的可能不是内容，而是互动的钩子。分享我是如何让群消息秒回的经验...",
        content: `
      <p>很多主播反馈互动少。其实你差的可能不是内容，而是互动的钩子。</p>
      <p>第一：设置差异化身份标签。让每个人在群里都有存在感。</p>
      <p>第二：定时的“空降”惊喜。不要总是机械发通知。</p>
      <p>第三：建立分布式信任。让老粉丝带新粉丝。</p>
    `,
        author: "运营大咖M姐",
        authorAvatar: "🎤",
        category: "voice",
        categoryLabel: "有声演播",
        tags: ["社群运营", "主播进阶"],
        date: "2026-02-15",
        views: 1560,
        likes: 132,
        comments: 24,
    },
];
